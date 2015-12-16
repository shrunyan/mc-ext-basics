'use strict'

module.exports = {

  name: 'pause_execution_for_x_seconds',
  description: 'Pause for X Seconds',
  icon: '/extensions/mc/basics/icons/pause_execution_for_x_seconds.svg',

  options: {
    length: {
      required: true
    }
  },

  execute: function(stage) {

    let seconds = stage.option('length')

    stage.log('Beginning pause for ' + seconds +' seconds')

    setTimeout(() => {
      stage.log('Finished pause for ' + seconds +' seconds')
      stage.succeed()
    }, seconds * 1000)

  }

}
