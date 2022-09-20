import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const filesDirectory = path.join(process.cwd(), 'files');

export default async function getFilePath(req: NextApiRequest, res: NextApiResponse) {

  const { id } = req.query;

  if (!id) {
    res.status(400).json({ message: 'id parameter must be sepcified.' })
    return
  } else if (id && typeof id !== 'string') {
    res.status(400).json({ message: 'id parameter must be string.' })
  } else {
    const fullPath = path.join(filesDirectory, `${id}`);
    console.log(fullPath);

    // const content = fs.readFileSync(fullPath)
    // console.log(content);

    res.status(200).json(fullPath);
  }
}