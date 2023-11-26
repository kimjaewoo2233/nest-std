import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassModule } from './routes/class/class.module';

@Module({
  imports: [ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
