const fs = require('fs')
const path = require('path')

function getFiles (dir, parentPath = '') {
  if (fs.existsSync(dir)) {
    const folders = fs.readdirSync(dir, { withFileTypes: true })
    const files = folders.map((dirent) => {
      const res = path.resolve(dir, dirent.name)
      const name = [parentPath, dirent.name].filter(v => v).join('/')
      return dirent.isDirectory()
        ? getFiles(res, name)
        : {
            name,
            path: res
          }
    })
    return Array.prototype.concat(...files)
  }
  return []
}

const customPath = path.resolve('prisma/custom')
const prismaPath = path.resolve('prisma/generated')

const files = getFiles(customPath)

console.log(`${files.length} custom files found...`)
files.forEach((file) => {
  const encoding = 'utf-8'
  const moveToPath = file.path.replace(customPath, prismaPath)
  const content = fs.readFileSync(file.path, { encoding })
  if (fs.existsSync(file.path)) {
    console.log(`copy : ${file.path} to ${moveToPath}`)
    fs.writeFileSync(moveToPath, content, { encoding })
    if (fs.existsSync(moveToPath)) {
      console.log('file copied')
    }
    else {
      console.log(`file ${moveToPath} copy failed`)
    }
  }
  else {
    console.log(`${file.path} file content not found`)
  }
})
