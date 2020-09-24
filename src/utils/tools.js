export const isPlainObject = (obj) => {
  return (Object.prototype.toString.call(obj)) === '[object Object]'
}
export const toString = (val) => {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === Object.prototype.toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}
/*
  判断是否是空字符串
*/
export const isEmptyStr = (v) => {
  return v === ''
}
/*
  判断值是否不是undefined 和 null
*/
export const isDef = (v) => {
  return (v !== undefined) && (v !== null)
}
/*
  判断值是否是undefined 或 null
*/
export const isUndef = (v) => {
  return (v === undefined) || (v === null)
}
/*
  获取原始数据类型
*/
export const rawType = (v) => {
  return Object.prototype.toString.call(v).slice(8, -1)
}

/*
  判断是否是基本数据类型值
*/
export const isPrimitive = (v) => {
  return ((((typeof v) === 'string') || ((typeof v) === 'number')) || ((typeof v) === 'symbol')) || ((typeof v) === 'boolean')
}
