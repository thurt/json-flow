#! /usr/bin/env node
'use strict'

const fs = require('fs')
const oboe = require('oboe')
const program = require('commander')
const jsonFlow = require('./index')

program
  .option('-t, --tabs', 'Use tabs instead of spaces')
  .option('-s, --space-amount <n>', 'How many spaces to use for indentation', noop => noop, 2)
  .parse(process.argv)

let inputJson
if (program.args[0]) {
  inputJson = fs.readFileSync(program.args[0])
  console.log(jsonFlow(JSON.parse(inputJson), program.spaceAmount, program.tabs))
}
else {
  const stdin = process.stdin
  oboe(stdin).done(text => console.log(jsonFlow(text, program.spaceAmount, program.tabs))).fail(console.error)
}
