const fs = require('fs')

/**
 * @param {*} src 源路径
 * @param {*} dst 目标路径
 */
function copy(src, dst) {
  fs.writeFileSync(dst, fs.readFileSync(src))
}

function main(argv) {
  copy(argv[0], argv[1])
}

main(process.argv.slice(2))