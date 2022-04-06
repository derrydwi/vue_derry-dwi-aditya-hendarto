export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export const generateTitle = (slug) => {
  return slug.replace(/-/g, ' ').replace(/\b[a-z]/g, function () {
    return arguments[0].toUpperCase()
  })
}

export const generateDateTime = (dateTime) => {
  return new Date(dateTime).toUTCString().substring(0, 22)
}
