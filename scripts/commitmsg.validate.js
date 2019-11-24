const chalk = require('chalk');
const fs = require('fs');

console.log('excute');

const commitMsg = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf-8');
const commitPattern = /^(feat|fix|docs|style|refactor|chore)\s-(g|m|l)\s[\s\S]+$/g;
const mergePattern = /^\w+-\d+\s[\s\S]+$/g;

if (commitMsg.indexOf('Merge branch') > -1) {
  process.exit(0);
}

if (!commitPattern.test(commitMsg) && !mergePattern.test(commitMsg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      ' 💅 sorry, its a invalid commit message format.',
    )}\n\n${chalk.red(' please see under examples:\n\n')}    ${chalk.green(
      ' 👉 commit message: feat -g 提交信息',
    )}\n` +
      `    ${chalk.green(
        ' 👉 merge message : fix -l 项目所有图片保真压缩',
      )}\n\n${chalk.red('  See README.md for more details.\n')}`,
  );
  process.exit(1);
}

process.exit(0);
