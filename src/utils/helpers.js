export function getBySubstr (source, str) {
  const targetKey = Object.keys(source).find(key => key.includes(str))
  return source[targetKey]
}
