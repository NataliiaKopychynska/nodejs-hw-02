import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    console.log('before', contacts.length);

    contacts.pop();
    console.log('after', contacts.length);
  } else {
    return console.log('no contacts to remove');
  }
};

removeLastContact();
