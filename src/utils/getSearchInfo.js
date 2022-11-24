export function getSearchInfo(search) {
  const info = {};
  search.forEach((value, key) => {
    info[key] = value;
  });
  return info;
}
