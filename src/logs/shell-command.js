'use strict'

module.exports = {

  id: 'shell_command',
  name: 'Shell Command Log',
  description: 'Easily logs and formats output for a log made from shell execution',

  generate: function(title, stdout, stderr, exitCode) {
    return {
      type: 'FQID',
      title: title,
      data:  {
        stdout: stdout,
        stderr: stderr,
        exitCode: exitCode
      }
    }
  },
  
  renderDetails: function(data) {

    let html = ''

    return html

  }

}
