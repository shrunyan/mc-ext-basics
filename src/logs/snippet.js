'use strict'

module.exports.SnippetLog = class SnippetLog {

  constructor(title, snippetContents) {
    this.type = 'snippet'
    this.title = title
    this.data = {
      snippet: snippetContents
    }
  }

}
