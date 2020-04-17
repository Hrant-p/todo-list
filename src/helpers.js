export const isEmpty = (value) => value === undefined
  || value === null
  || (typeof value === 'object' && Object.keys(value).length === 0)
  || (typeof value === 'string' && value.trim().length === 0);

export function searchResult(listItems, query) {
  if (!isEmpty(query)) {
    return listItems.filter((item) => item
      .label
      .toLowerCase()
      .search(query.toLowerCase()) > -1);
  }
  return listItems;
}

export const setUserLanguage = lang => localStorage.setItem('LANGUAGE', lang);

export const languages = {
  en: 'en',
  am: 'am',
  ru: 'am'
};
