const chokidar = require('chokidar');
const path = require('path');
const chalk = require('chalk');
const generateJSONFile = require('./generateJSONFile.js');
const CWD = process.cwd();
const watcher = chokidar.watch([path.join(CWD, './docs'), path.join(CWD, './blog')], {
  ignoreInitial: true, // 默认为false，会在初始化时一直触发add和addDir事件
});
watcher
  .on('add', (filePath) => {
    const extension = path.extname(filePath);
    if (extension === '.md' || extension === '.markdown') {
      console.log(chalk.green(`${filePath} was added`));
      generateJSONFile(CWD);
    }
  })
  .on('change', (filePath) => {
    const extension = path.extname(filePath);
    if (extension === '.md' || extension === '.markdown') {
      console.log(chalk.green(`${filePath} was changed`));
      generateJSONFile(CWD);
    }
  })
  .on('unlink', (filePath) => {
    const extension = path.extname(filePath);
    if (extension === '.md' || extension === '.markdown') {
      console.log(chalk.red(`${filePath} was deleted`));
      generateJSONFile(CWD);
    }
  });