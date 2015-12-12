'use strict'

let BasicLog = require('../logs/basic')

module.exports = {

  name: 'pause_execution_for_x_seconds',
  description: 'Pause for X Seconds',
  icon: '/example/assets/whatever',

  options: {
    length: {
      required: true
    }
  },

  execute: function(stage) {

    let seconds = stage.getOption('length')

    setTimeout(() => {

      stage.log(new BasicLog('Paused for ' + seconds +' seconds'))
      stage.markAsSuccessful()

    }, seconds * 1000)

  }

}
