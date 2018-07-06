const shell = require('shelljs');
const generateJSONFile = require('./generateJSONFile.js');
const CWD = process.cwd();

const build = () => {
  shell.cd(CWD);
  generateJSONFile(CWD);
  shell.exec('npm run build');
};

module.exports = build;