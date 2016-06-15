'use strict'
var test = require('tap').test
var consoleControl = require('../index.js')

test('consoleControl', function (t) {
  var oneoptarg = {
    up: 'A',
    down: 'B',
    forward: 'C',
    back: 'D',
    nextLine: 'E',
    previousLine: 'F'
  }
  Object.keys(oneoptarg).forEach(function (move) {
    t.is(consoleControl[move](), '\x1b[' + oneoptarg[move], move)
    t.is(consoleControl[move](10), '\x1b[10' + oneoptarg[move], move + ' 10')
  })
  var noargs = {
    eraseData: 'J',
    eraseLine: 'K',
    hideCursor: '?25l',
    showCursor: '?25h'
  }
  Object.keys(noargs).forEach(function (move) {
    t.is(consoleControl[move](), '\x1b[' + noargs[move], move)
  })
  t.is(consoleControl.horizontalAbsolute(10), '\x1b[10G', 'horizontalAbsolute 10')
  t.is(consoleControl.horizontalAbsolute(0), '\x1b[0G', 'horizontalAbsolute 0')
  try {
    consoleControl.horizontalAbsolute()
    t.fail('horizontalAbsolute')
  } catch (e) {
    t.pass('horizontalAbsolute')
  }
  t.is(consoleControl.color('bold', 'white', 'bgBlue'), '\x1b[1;37;44m', 'set color')
  try {
    consoleControl.color('bold', 'invalid', 'blue')
    t.fail('set invalid color')
  } catch (e) {
    t.pass('set invalid color')
  }
  t.is(consoleControl.goto(10, 3), '\x1b[3;10H', 'absolute position')
  t.is(consoleControl.gotoSOL(), '\r', 'goto start of line')
  t.is(consoleControl.beep(), '\x07', 'beep beeps')
  t.done()
})
