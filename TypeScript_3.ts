import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

interface Link {
  url: string;
}

async function downloadHTML(url: string, folderPath: string): Promise<void> {
  try {
    const response = await axios.get(url);
    const fileName = url.split('/').pop() || 'index.html';
    const filePath = path.join(folderPath, fileName);
    fs.writeFileSync(filePath, response.data);
    console.log(`Downloaded ${url}`);
  } catch (error) {
    console.error(`Failed to download ${url}: ${error}`);
  }
}

async function processLinks(jsonFilePath: string): Promise<void> {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    const links: Link[] = JSON.parse(jsonData);

    const folderName = path.basename(jsonFilePath, path.extname(jsonFilePath));
    const folderPath = path.join(process.cwd(), `${folderName}_pages`);
    fs.mkdirSync(folderPath);

    const downloadPromises = links.map((link: Link) =>
      downloadHTML(link.url, folderPath)
    );

    await Promise.all(downloadPromises);
    console.log('All HTML content downloaded successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Зчитуємо аргумент командного рядка (шлях до JSON-файлу)
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Потрібно передати лише один аргумент - шлях до JSON-файлу');
} else {
  const jsonFilePath = args[0];
  processLinks(jsonFilePath);
}
