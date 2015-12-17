'use strict'

module.exports = {
  vendor: 'mc',
  name: 'basics',
  description: 'Mission Control',
  stages: {
    pause_execution_for_x_seconds: require('./src/stages/pause-for-x-seconds'),
    run_local_shell_command: require('./src/stages/run-local-shell-command')
  },
  logs: {
    snippet: require('./src/logs/snippet'),
    shell_command: require('./src/logs/shell-command')
  }
}
