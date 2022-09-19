import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';



export interface File {
    id: string,
    date: string,
    title: string,
    fileSize: number,
    fileContents: string
  }

  const filesDirectory = path.join(process.cwd(), 'files');

  export default function getSortedPostsData(req: NextApiRequest, res: NextApiResponse) {

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
  const sortedAllFilesData = allFilesData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  res.status(200).json(sortedAllFilesData)
};