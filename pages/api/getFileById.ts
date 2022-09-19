import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { File } from "./getFiles";

export interface FileData extends File {
    contentHtml: string,
}

const filesDirectory = path.join(process.cwd(), 'files');

export default async function getPostData(id: string) {
    // const getFileById = async (id: string) => {

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
        } as FileData;
    // }

    // res.status(200).json(getFileById);
}