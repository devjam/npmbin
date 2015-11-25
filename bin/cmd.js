#!/usr/bin/env node
;
var args, command, exec;

exec = require('child_process').exec;

args = process.argv.slice(2).join(' ');

if (args) {
  command = '$(npm bin)/' + args;
} else {
  command = 'echo $(npm bin); ls $(npm bin)';
}

exec(command, function(err, stdout, stderr) {
  if (stdout) {
    console.log(stdout);
  }
  if (stderr) {
    return console.log(stderr);
  }
});
