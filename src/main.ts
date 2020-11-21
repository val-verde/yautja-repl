const { spawn,
        ChildProcess } = require('child_process');

class YautjaREPL {
    private replProcess: typeof ChildProcess;

    constructor(processName: String) {
        let replProcess = spawn(processName);
        this.replProcess = replProcess
    }

    start(onReceivedBytes,
          onExit) {
        this.replProcess.stdin.resume();
        this.replProcess.stdin.on('end', onReceivedBytes);
        this.replProcess.on('exit', onExit);
    }

    stop() {
    }
}

