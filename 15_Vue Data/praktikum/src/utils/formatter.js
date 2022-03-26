export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export const generateDateTime = (dateTime) => {
  return new Date(dateTime).toUTCString().substring(0, 22);
};
