import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  await fs.writeFile(PATH_DB, '[]', null, 2);
};

console.log(await readContacts());
removeAllContacts();
