import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const aboutsDirectory = path.join(process.cwd(), 'abouts')

export function getSortedAboutsData() {
   const fileNames = fs.readdirSync(aboutsDirectory)
   const allAboutsData = fileNames.map(fileName => {
      const fullPath = path.join(aboutsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      
      return {
         ...matterResult.data
      }
   })

   // Sort abouts by id
   return allAboutsData.sort(({ id: a }, { id: b }) => {
      if (a < b) {
         return 1
      }
      else if (a > b) {
         return -1
      }
      else {
         return 0
      }
   })
}

export async function getAboutData(id) {
   const fullPath = path.join(aboutsDirectory, `${id}.md`)
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
