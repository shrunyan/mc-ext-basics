'use strict'

let exec = require('child_process').exec
let ShellCommandLog = require('../logs/shell-command').ShellCommandLog

module.exports = {

  name: 'run_local_shell_command',
  description: 'Run Local Shell Command(s)',
  icon: '/extensions/mc/basics/icons/run_local_shell_command.svg',

  options: {
    commands: {
      required: true,
      type: 'textarea'
    }
  },

  execute: function(stage) {

    let commands = stage.option('commands')

    stage.log('Running shell command')

    exec(commands, function (err, stdout, stderr) {

      let exitCode = (err !== null) ? 0 : err.code

      stage.log(new ShellCommandLog('Local shell command execution completed.', stdout, stderr, exitCode))

    })

  }

}
