import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map, tap } from "rxjs";


@Injectable()
export class LogginInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        
        const request = context.switchToHttp().getRequest();
        const path = request.originalUrl;
        const now = new Date();

        console.log(`${path} TIME: ${now.toLocaleString('kr')}`);

        return next
            .handle()
            .pipe(
                tap((observable) => console.log(observable)),
                map((observable) => ({
                    message: '인터셉터에서 추가한 메시지',
                    data: observable
                }))
            );
    }

}