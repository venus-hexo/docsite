const fs = require('fs-extra');
const path = require('path');
const parseMd = require('./parseMd.js');

const generate = (obj, cwd, type, language) => {
  try {
    fs.ensureDirSync(path.join(cwd, `./${type}/${language}`));
  }
  catch(err) {
    console.log(err);
  }
  const parse = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const stat = fs.statSync(path.join(dir, file));
      const extension = path.extname(file);
      if (stat.isFile() && (extension === '.md' || extension === '.markdown')) {
        const result = parseMd(path.join(dir, file));
        const reg = new RegExp(`^.+\/${type}\/${language}\/(.+)`);
        obj[language].push(
          {
            filename: reg.exec(path.join(dir, file)) && reg.exec(path.join(dir, file))[1] || '',
            ...result.meta,
            __html: result.__html,
          }
        );
      } else if (stat.isDirectory()) {
        parse(path.join(dir, file));
      }
    });
  };
  parse(path.join(cwd, `./${type}/${language}`));
};

const generateJSONFile = (cwd) => {
  const blog = {
    'zh-cn': [],
    'en-us': [],
  };
  const docs = {
    'zh-cn': [],
    'en-us': [],
  };
  try {
    fs.ensureDirSync(path.join(cwd, 'md_json'));
  }
  catch(err) {
    console.log(err);
  }
  // fs.emptyDirSync(path.join(cwd, 'md_json'));
  generate(blog, cwd, 'blog', 'zh-cn');
  generate(blog, cwd, 'blog', 'en-us');
  fs.writeFileSync(path.join(cwd, './md_json/blog.json'), JSON.stringify(blog, null, 2), 'utf8');
  generate(docs, cwd, 'docs', 'zh-cn');
  generate(docs, cwd, 'docs', 'en-us');
  fs.writeFileSync(path.join(cwd, './md_json/docs.json'), JSON.stringify(docs, null, 2), 'utf8');
};

module.exports = generateJSONFile;

