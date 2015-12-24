'use strict'

module.exports = {

  id: 'snippet',
  name: 'Snippet Log',
  description: 'Renders a monospaced snippet block',

  generate: function(snippetContent) {
    return {
      snippet: snippetContent
    }
  },

  renderDetails: function(data) {
    return '<pre>' + data.snippet + '</pre>'
  }

}
