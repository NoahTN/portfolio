import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getSortedProjectsData() {
   const fileNames = fs.readdirSync(projectsDirectory)
   const allProjectsData = fileNames.map(fileName => {
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
         content: matterResult.content,
         ...matterResult.data
      }
   })

   // Reverse sort projects by id
   return allProjectsData.sort(({ id: a }, { id: b }) => {
      if (a < b) {
         return -1
      }
      else if (a > b) {
         return 1
      }
      else {
         return 0
      }
   })
}