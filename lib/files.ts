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

export interface PostData extends File {
  contentHtml: string,
}


const filesDirectory = path.join(process.cwd(), 'files');

export function getSortedPostsData() {

  // Get file names under /files
  const fileNames = fs.readdirSync(filesDirectory);
  const allFilesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(filesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // get file size
    const fileStats = fs.statSync(fullPath)
    const fileSize = fileStats.size;
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // matterResult.
    // Combine the data with the id
    return {
      id,
      fileSize,
      ...matterResult.data,
      fileContents,
    } as File;
  });
  // Sort posts by date
  return allFilesData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};



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

export async function getPostData(id: string) {
  const fullPath = path.join(filesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as PostData;
}





export async function downloadFile(ids: string[]) {
  for (const id of ids) {
    const fullPath = path.join(filesDirectory, `${id}.md`);
    const data = await download(fullPath); //, dist : letrehoz egy ilyen nevu mappat es oda teszi bele, {extract: false} -> zip file-t tolt le
    fs.writeFileSync("../destination/test.md", data);
    console.log("done");
  }

}


