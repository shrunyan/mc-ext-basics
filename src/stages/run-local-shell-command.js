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
    },
    timeout: {
      required: true,
      type: 'text',
      default: 600000 // 10 minutes
    }
  },

  execute: function(stage) {

    let commands = stage.option('commands')
    let timeout = stage.option('timeout')

    stage.log('Running shell command')

    exec(commands, {timeout: timeout}, function (err, stdout, stderr) {

      let exitCode = (err !== null) ? err.code : 0

      stage.log(new ShellCommandLog('Local shell command execution completed.', stdout, stderr, exitCode))

      if (err !== null) {
        stage.fail()
      } else {
        stage.succeed()
      }

    })

  }

}
