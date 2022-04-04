export default function (to, from, savedPosition) {
  return savedPosition || to.meta?.scrollPos || { x: 0, y: 0 }
}
