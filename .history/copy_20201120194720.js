var fs = require('fs');

function copy(src, dst) {
  // 让 src 的内容一点点地读入 dst 中
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function main(argv) {
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));