import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    return [];
  }
}
readContacts();
