import fs from "fs/promises";
import path from "path";

export async function getLocalData<T>(fileName: string): Promise<T> {
  try {
    const filePath = path.join(process.cwd(), "data", `${fileName}.json`);
    const jsonData = await fs.readFile(filePath, "utf-8");
    return JSON.parse(jsonData) as T;
  } catch (error) {
    console.error(`Error reading ${fileName}.json:`, error);
    throw error;
  }
}
