import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import * as path from 'path';
import * as fs from 'fs';

@Catch()
export class HttpExceptionFilter  implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionResponse = exception instanceof HttpException ? exception.getResponse() : 'Internal server error';
        const message = typeof exceptionResponse === 'string' ? exceptionResponse : (exceptionResponse as {message? : string}).message || 'Internal server error';

        const fecha = new Date();
        const formatofecha = fecha.toLocaleString('es-CO', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });

        let logLevel = 'INFO';
        if (status >= 500) {
            logLevel = 'ERROR';
        } else if (status >= 400) {
            logLevel = 'WARN';
        } else if (status >= 300) {
            logLevel = 'INFO';
        } else {
            logLevel = 'DEBUG';
        }


        response.status(status).json({
            statusCode: status,
            timestamp: formatofecha,
            path: request.url,
            message: message,
        });

        const logDir = path.join(__dirname, '../../logs');
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }

        const logFileName = `${logLevel.toLowerCase()}.log`;
        const logFile = path.join(logDir, logFileName);

        let errorLog = `[${logLevel}] \n Fecha: ${formatofecha} \n StatusCode: ${status} Metodo: ${request.method}\n Ruta: ${request.url} \n Mensaje: ${message} \n`;

        if (logLevel === 'ERROR' && exception.stack) {
            errorLog += `Stack: ${exception.stack} \n`;
        }

        fs.appendFileSync(logFile, errorLog);
    }
}