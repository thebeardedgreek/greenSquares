var express = require('express')
var app = express()
	/*
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
*/
const { spawn } = require('child_process')
const deploySh = spawn('./', [ 'testy' ], {
  cwd: process.env.HOME + '/',
  env: Object.assign({}, process.env, { PATH: process.env.PATH + ':/' })
})
//https://jaketrent.com/post/run-shell-script-nodejs/
