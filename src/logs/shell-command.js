'use strict'

module.exports.ShellCommandLog = class ShellCommandLog {

  constructor(title, stdout, stderr, exitCode) {
    this.type = 'shell_command'
    this.title = title
    this.data = {
      stdout: stdout,
      stderr: stderr,
      exitCode: exitCode
    }
  }

}
