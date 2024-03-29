import { IsString, MinLength, MaxLength, Matches, IsEmail } from "class-validator";

export class LoginUsuarioDto {
    @IsString()
    @MinLength(6)
    @MaxLength(60)
    @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe tener una letra MAYÚSCULA, minúscula y un número'
    })
    contraseña: string;

    @IsEmail()
    @MinLength(5)
    email: string;
}
