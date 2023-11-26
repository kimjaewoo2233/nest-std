import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ClassService } from './class.service';
import { LogginInterceptor } from 'src/common/loggin.interceptor';

@Controller('class')
export class ClassController {

    constructor(private readonly classService: ClassService){};

    @Get('all')
    @UseInterceptors(LogginInterceptor)
    async allData(): Promise<string> {

        return '테스트';
    }
}
