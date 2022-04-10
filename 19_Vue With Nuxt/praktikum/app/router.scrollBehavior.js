export default function (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(savedPosition || to.meta?.scrollPos || { x: 0, y: 0 })
    }, 300)
  })
}
