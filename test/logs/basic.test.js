'use strict'

let test = require('tape')
let BasicLog = require('../../src/logs/basic').BasicLog

//let extension = require('../index')
//let extensionValidator = require('mc-extension-tests')
//
//extensionValidator(extension)

test('Test log object translates properties as expected', function(t) {

  let log = new BasicLog('This is an example')

  t.equal(log.title, 'This is an example', 'log title property should equal title passed as argument')
  t.end()
})
