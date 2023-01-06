import { Bot, BotError } from './bot';
import { SubProcess } from 'teen_process';
import { Expose, Type } from 'class-transformer';

export class REPLBot implements Bot {
  @Expose()
  name: string;
  @Expose()
  path: string;
  @Expose()
  argv: string[];

  constructor(name: string, path: string, argv: string[]) {
    this.name = name;
    this.path = path;
    this.argv = argv;
  }

  private process?: SubProcess;

  async init(): Promise<void> {
    try {
      this.process = new SubProcess(this.path, this.argv);
    } catch (error) {
      throw new Error(`Error spawning process: ${error.message}`);
    }
    await this.process.start((stdout, stderr) => {
      if (stdout || stderr) return true;
      return false;
    });
    this.process.on('exit', (code: number, signal: string) => {
      // if we get here, all we know is that the proc exited
      console.log(`exited with code ${code} from signal ${signal}`);
      // exited with code 127 from signal SIGHUP
    });

    this.process.on('stop', (code: number, signal: string) => {
      // if we get here, we know that we intentionally stopped the proc
      // by calling proc.stop
      console.log(`stopped with code ${code} from signal ${signal}`);
    });

    this.process.on('end', (code: number, signal: string) => {
      // if we get here, we know that the process stopped outside of our control
      // but with a 0 exit code
      console.log(`ended with code ${code} from signal ${signal}`);
    });

    this.process.on('die', (code: number, signal: string) => {
      // if we get here, we know that the process stopped outside of our control
      // with a non-zero exit code
      console.log(`died with code ${code} from signal ${signal}`);
    });

    //this.process.on('output', (stdout:string, stderr:string) => {
    //  console.log(`stdout: ${stdout}`);
    //  console.log(`stderr: ${stderr}`);
    //});
  }

  async send(message: string): Promise<string> {
    if (!this.process) {
      throw new Error('REPLBot process not initialized');
    }

    return new Promise<string>((resolve, reject) => {
      this.process!.proc!.stdin!.write(`${message}\n`);
      this.process!.on('lines-stdout', (lines: string[]) => {
        resolve(lines.join('\n'));
      });
    });
  }
}
