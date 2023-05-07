import { IsString, MinLength, MaxLength, Matches } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    apellidos: string;

    @IsString()
    @MinLength(1)
    email: string;
  
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe tener una letra MAYÚSCULA, minúscula y un número'
    })
    contraseña: string;
}
