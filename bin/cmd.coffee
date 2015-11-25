`#!/usr/bin/env node
`
exec = require 'child_process'
  .exec

args = process.argv
  .slice 2
  .join ' '

if args
  command = '$(npm bin)/' + args
else
  command = 'echo $(npm bin); ls $(npm bin)'

exec command, (err, stdout, stderr)->
  # console.log err if err
  console.log stdout if stdout
  console.log stderr if stderr
