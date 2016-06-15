'use strict'
var consoleControl = require('./index.js')

process.stdout.write(consoleControl.goto(1, 1) + consoleControl.eraseData())
for (var ii = 0; ii < 20; ++ii) {
  process.stdout.write(consoleControl.goto(1, ii + 1) + (ii + 1) + '.')
}

process.stdout.write(
  consoleControl.forward(4) +
  consoleControl.up(10) + 'line 10' +
  consoleControl.down() + 'line 11' +
  consoleControl.forward(20) + 'over 20' +
  consoleControl.back(17) + 'back 17' +
  consoleControl.horizontalAbsolute(5) + 'start!\n' +
  consoleControl.goto(10, 12) + 'garbage garbage' +
  consoleControl.goto(10, 12) + consoleControl.eraseLine() +
  consoleControl.nextLine(3) + '15# ' +
  consoleControl.previousLine(1) + '14# ' +
  consoleControl.goto(10, 23) + 'actual line 23' +
  consoleControl.goto(4, 1) + '456789!123456789@123456789#1234567890$123456789%123456789^123456789&123456789' +
  consoleControl.goto(4, 2) +
  consoleControl.color('bold') + 'bold' + consoleControl.color('reset') + ' ' +
  consoleControl.color('italic') + 'italic' + consoleControl.color('reset') + ' ' +
  consoleControl.color('underline') + 'underline' + consoleControl.color('reset') + ' ' +
  consoleControl.color('inverse') + 'inverse' + consoleControl.color('reset') + ' ' +

  consoleControl.color('bold') + 'n' + consoleControl.color('stopBold') + 'b ' +
  consoleControl.color('italic') + 'n' + consoleControl.color('stopItalic') + 'i ' +
  consoleControl.color('underline') + 'n' + consoleControl.color('stopUnderline') + 'u ' +
  consoleControl.color('inverse') + 'i' + consoleControl.color('stopInverse') + 'i' +

  consoleControl.goto(4, 3) +
  consoleControl.color('white') + 'white ' +
  consoleControl.color('black') + 'black ' +
  consoleControl.color('blue') + 'blue ' +
  consoleControl.color('cyan') + 'cyan ' +
  consoleControl.color('green') + 'green ' +
  consoleControl.color('magenta') + 'magenta ' +
  consoleControl.color('red') + 'red ' +
  consoleControl.color('yellow') + 'yellow ' +
  consoleControl.color('brightWhite') + 'brightWhite ' +
  consoleControl.color('brightBlack') + 'brightBlack ' +
  consoleControl.goto(4, 4) +
  consoleControl.color('brightBlue') + 'brightBlue ' +
  consoleControl.color('brightCyan') + 'brightCyan ' +
  consoleControl.color('brightGreen') + 'brightGreen ' +
  consoleControl.color('brightMagenta') + 'brightMagenta ' +
  consoleControl.color('brightRed') + 'brightRed ' +
  consoleControl.color('brightYellow') + 'brightYellow ' + consoleControl.color('reset') +

  consoleControl.goto(4, 5) +
  consoleControl.color('bgWhite') + 'white ' +
  consoleControl.color('bgBlack') + 'black ' +
  consoleControl.color('bgBlue') + 'blue ' +
  consoleControl.color('bgCyan') + 'cyan ' +
  consoleControl.color('bgGreen') + 'green ' +
  consoleControl.color('bgMagenta') + 'magenta ' +
  consoleControl.color('bgRed') + 'red ' +
  consoleControl.color('bgYellow') + 'yellow ' +
  consoleControl.color('bgBrightWhite') + 'brightWhite ' +
  consoleControl.color('bgBrightBlack') + 'brightBlack ' +
  consoleControl.goto(4, 6) +
  consoleControl.color('bgBrightBlue') + 'brightBlue ' +
  consoleControl.color('bgBrightCyan') + 'brightCyan ' +
  consoleControl.color('bgBrightGreen') + 'brightGreen ' +
  consoleControl.color('bgBrightMagenta') + 'brightMagenta ' +
  consoleControl.color('bgBrightRed') + 'brightRed ' +
  consoleControl.color('bgBrightYellow') + 'brightYellow ' + consoleControl.color('reset') +
  consoleControl.goto(1, 24)
)
