export const capitalize = (text) => {
  const eachWord = text.split(' ')
  for (let i = 0; i < eachWord.length; i++) {
    eachWord[i] = eachWord[i][0].toUpperCase() + eachWord[i].substr(1)
  }
  return eachWord.join(' ')
}

export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export const generateDateTime = (dateTime) => {
  return new Date(dateTime).toUTCString().substring(0, 22)
}

export const generatePaginationLength = (newsLength) => {
  return Math.min(Math.max(parseInt(Math.ceil(newsLength / 5)), 1), 10)
}
