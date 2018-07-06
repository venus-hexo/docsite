const shell = require('shelljs');
const chokidar = require('chokidar');
const path = require('path');
const cp = require('child_process');
const generateJSONFile = require('./generateJSONFile.js');
const CWD = process.cwd();

const start = () => {
  shell.cd(CWD);
  generateJSONFile(CWD);
  cp.fork(path.join(__dirname, './watch.js'));
  shell.exec('npm start');
};

module.exports = start;