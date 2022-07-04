// we can use log managers like splunk here

interface Log {
  log: (message: string) => void
}


export class Logger implements Log {
  log(message: string,) {
    console.log(message);
  }
}