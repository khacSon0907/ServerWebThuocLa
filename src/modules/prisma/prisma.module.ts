import { Module,Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() 
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 导出 PrismaServic
})
export class PrismaModule {}
