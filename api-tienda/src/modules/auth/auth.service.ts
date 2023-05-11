import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import * as bcrypt from 'bcrypt'
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { JwtService } from '@nestjs/jwt/dist';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly jwtService: JwtService
  ){}
  

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const { contraseña, ...usuarioData } = createUsuarioDto
      const usuario = this.usuarioRepository.create({
        ...usuarioData,
        contraseña: bcrypt.hashSync(contraseña, 10)
      })

      await this.usuarioRepository.save(usuario)
      delete usuario.contraseña
      return {
        user: {...usuario},
        token: this.getJwtToken({email: usuario.email})
      }      
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  async login (loginUsuarioDto: LoginUsuarioDto) {
    try {
      // buscamos el usuario del email
      const { email, contraseña } = loginUsuarioDto;
      const usuario = await this.usuarioRepository.findOne({
        where: {email},
        select: {email: true, contraseña: true, nombre: true, apellidos: true, roles: true}
      });

      if (!usuario)
        throw new UnauthorizedException ('Credenciales no válidas (email)'
      );
      
      // comparamos las contraseñas
      if (!bcrypt.compareSync(contraseña, usuario.contraseña))
        throw new UnauthorizedException ('Credenciales no válidas (contraseña)'
      );

      const token = this.getJwtToken({email: usuario.email})
      return {
        user: {...usuario},
        token: token
      };
    }
    catch (error) {
      // this.handleDBErrors (error)
      console.error(error)
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.usuarioRepository.find({
      relations: {direcciones: true}
    })
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({
      where: {id}
    })
  }

  async update(id: number, updateAuthDto: UpdateAuthDto) {
    const auth = await this.findOne(id)
    if (!auth) {
      throw new Error(`Usuario con id ${id} no encontrado`)
    }

    // aplicar los cambios del DTO
    auth.nombre = updateAuthDto.nombre
    auth.apellidos = updateAuthDto.apellidos
    auth.email = updateAuthDto.email
    auth.contraseña = updateAuthDto.contraseña


    await this.usuarioRepository.save(auth)

    return auth
  }

  async remove(id: number) {
    const usuario = await this.findOne(id)
    await this.usuarioRepository.remove(usuario)

    return `Usuario eliminado con éxito`
  }
 
  // private handleDBErrors(error: any): never {
  //   if (error.code === '23505'){
  //     throw new BadRequestException(error.detail);
  //   }
  //   throw new InternalServerErrorException('Please Check Server Error ...');
  // }

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
