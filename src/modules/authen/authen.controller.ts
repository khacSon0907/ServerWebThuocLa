import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { CreateAuthenDto } from './dto/create-authen.dto';
import { UpdateAuthenDto } from './dto/update-authen.dto';
import { Response, } from 'express';
@Controller('authen')
export class AuthenController {
  constructor(private readonly authenService: AuthenService) { }

  @Post('register')
  async create(@Body() createAuthenDto: CreateAuthenDto, @Res() res: Response) {
    try {
      let newUser = await this.authenService.register(createAuthenDto);
      if (!newUser.data) {
        if (newUser.error.meta.target == 'users_username_key') {
          throw ("user name da ton tai")
        }
        if (newUser.error.meta.target == 'users_email_key') {
          throw ("email da ton tai")
        }
      }
      return res.status(200).json({
        message: 'ok',
        data: newUser.data
      })
    }
    catch (err) {
      return res.status(404).json({
        message: err
      })

    }
  }

  @Get()
  findAll() {
    return this.authenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthenDto: UpdateAuthenDto) {
    return this.authenService.update(+id, updateAuthenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authenService.remove(+id);
  }
}
