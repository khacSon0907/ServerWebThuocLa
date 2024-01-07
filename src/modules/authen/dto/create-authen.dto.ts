import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateAuthenDto {
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    password:string;

    @IsEmail()
    email:string;

    @IsNotEmpty()
    avatar:string;
}
