import { Injectable } from '@nestjs/common';
import { CreateAuthenDto } from './dto/create-authen.dto';
import { UpdateAuthenDto } from './dto/update-authen.dto';
import { PrismaService } from '../prisma/prisma.service';
import {hash} from 'bcrypt'
@Injectable()
export class AuthenService {
  constructor (private prisma: PrismaService) {}
  async register(createAuthenDto: CreateAuthenDto) {
    try{
        let newUser = await this.prisma.users.create({
          data:{
            ...createAuthenDto,
            password:await hash(createAuthenDto.password,10),
            createAt:String(Date.now()),
            updateAt:String(Date.now())
          }
        })
        return {
          data:newUser
        }
    }
    catch(err){
      return {
        error:err
      }
    }
  }

  async findAll() {

    let user = await this.prisma.users.findMany()
    return {
      data:user
    }
  }

  async findOne(id: number) {
    try{
      let findUser = await this.prisma.users.findUnique({
        where:{
          id:id
        }})
      return {
        data:findUser
      }
    }
    catch(err){
      return { 
        error:null
      }
    }
  }

  update(id: number, updateAuthenDto: UpdateAuthenDto) {
    return `This action updates a #${id} authen`;
  }

  remove(id: number) {
    return `This action removes a #${id} authen`;
  }
}
