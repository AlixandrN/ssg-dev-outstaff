// app/lib/get-local-data.ts
import fs from 'fs/promises';
import path from 'path';

export async function getLocalData<T>(fileName: string): Promise<T> {
  try {
    // Путь относительно корня проекта
    const filePath = path.join(process.cwd(), 'data', `${fileName}.json`);
    
    // Чтение файла
    const jsonData = await fs.readFile(filePath, 'utf-8');
    
    // Парсинг JSON
    return JSON.parse(jsonData) as T;
  } catch (error) {
    console.error(`Error reading ${fileName}.json:`, error);
    throw error;
  }
}