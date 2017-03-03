#!/usr/bin/env node

const { readFile } = require('fs');

const fileArg = process.argv[2];


if (fileArg) {
  readFile(fileArg, (err, data) => {
    if (err) return console.error('Error', err);
    process.stdout.write(data);
  })

} else process.exit();

console.log('This is the asynchronous version');
