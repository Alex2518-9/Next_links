import fs from 'fs';
import path from 'path';
import download from 'download'
import { NextApiRequest, NextApiResponse } from 'next';

const filesDirectory = path.join(process.cwd(), 'files');



export async function downloadFile(req: NextApiRequest, res: NextApiResponse) {
    const {ids} = req.body;
    for (const id of ids) {
      const fullPath = path.join(filesDirectory, `${id}.md`);
      const data = await download(fullPath); //, dist : letrehoz egy ilyen nevu mappat es oda teszi bele, {extract: false} -> zip file-t tolt le
      const downloadedFile = fs.writeFileSync(`../destination/${id}.md`, data);
        res.status(200).json(downloadedFile);
    }
  
  }