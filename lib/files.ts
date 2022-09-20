import fs from 'fs';
import path from 'path';
import download from 'download'
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


export interface File {
  id: string,
  date: string,
  title: string,
  fileSize: number,
  fileContents: string
}




const filesDirectory = path.join(process.cwd(), 'files');


export function getAllPostIds() {
  const fileNames = fs.readdirSync(filesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// export async function getPostData(id: string) {
//   const fullPath = path.join(filesDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   } as PostData;
// }





