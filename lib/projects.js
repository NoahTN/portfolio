import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getSortedProjectsData() {
   const  fileNames = fs.readdirSync(projectsDirectory)
   const allProjectsData = fileNames.map(fileName => {
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
    
      return {
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

export async function getProjectData(id) {
   const fullPath = path.join(postsDirectory, `${id}.md`)
   const fileContents = fs.readFileSync(fullPath, 'utf8')
   
   // Use gray-matter to parse the post metadata section
   const matterResult = matter(fileContents)

   // Use remark to convert markdown into HTML string
   const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
   const contentHtml = processedContent.toString()

   return {
      contentHtml,
      ...matterResult.data
   }
}
