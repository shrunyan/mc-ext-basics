'use strict'

let test = require('tape')
let SnippetLog = require('../../src/logs/snippet').SnippetLog

//let extension = require('../index')
//let extensionValidator = require('mc-extension-tests')
//
//extensionValidator(extension)

test('Test log object translates properties as expected', function(t) {

  let log = new SnippetLog('Title', 'example snippet contents')

  t.equal(log.title, 'Title', 'log title property should equal title passed as argument')
  t.equal(log.data.snippet, 'example snippet contents', 'log data property should contain snippet contents as property')

  t.end()
})
