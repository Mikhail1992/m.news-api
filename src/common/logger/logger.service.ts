import { injectable } from 'inversify';
import { Logger } from 'tslog';
import { ILogger } from './logger.interface';
import 'reflect-metadata';

@injectable()
class LoggerService implements ILogger {
  public logger: Logger;

  constructor() {
    this.logger = new Logger({
      displayInstanceName: false,
      displayLoggerName: false,
      displayFilePath: 'hidden',
      displayFunctionName: false,
    });
  }

  log(...args: Array<unknown>): void {
    this.logger.info(...args);
  }

  error(...args: Array<unknown>): void {
    this.logger.error(...args);
  }

  warn(...args: Array<unknown>): void {
    this.logger.warn(...args);
  }
}

export { LoggerService };
