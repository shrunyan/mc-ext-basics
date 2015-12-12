'use strict'

module.exports = {
  vendor: 'mc',
  name: 'basics',
  description: 'Mission Control',
  stages: {
    pause_execution_for_x_seconds: require('./src/stages/pause-for-x-seconds')
  },
  logs: {
    basic: require('./src/logs/basic')
  }
}
