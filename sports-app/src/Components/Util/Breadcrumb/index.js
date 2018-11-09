const generateBreadcrumb = (array = ['Home']) => {
  let breadcrumb = []

  if (!Array.isArray(array)) {
    throw new TypeError('type array')
  }

  if(array.length <= 3) {
    return array
  } else {
    breadcrumb = array.filter((path, index) => {
      if(index < 2) {
        return path
      }
      return false
    })
  }

  breadcrumb.push('...')
  breadcrumb.push(array[array.length - 1])
  return breadcrumb
}


export default generateBreadcrumb
