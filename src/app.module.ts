import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenModule } from './modules/authen/authen.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot(),AuthenModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
