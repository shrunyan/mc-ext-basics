'use strict'

let test = require('tape')
let SnippetLog = require('../../src/logs/snippet')

//let extension = require('../index')
//let extensionValidator = require('mc-extension-tests')
//
//extensionValidator(extension)

test('Test log object translates properties as expected', function(t) {

  let log = SnippetLog.generate('example snippet contents')

  t.equal(log.snippet, 'example snippet contents', 'log data should equal content passed as argument')

  t.end()

})
