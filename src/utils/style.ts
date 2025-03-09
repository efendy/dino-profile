/* eslint-disable  @typescript-eslint/no-explicit-any */

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export {
  classNames
}