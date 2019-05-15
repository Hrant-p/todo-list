    
export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

//-------------------//

export function searchResult(listItems, query) {
    if (!isEmpty(query)) {
      const result = listItems.filter(
        item => item.label.toLowerCase().search(query.toLowerCase()) > -1
      );
            return result
    } else {
        return listItems;
    };
};

