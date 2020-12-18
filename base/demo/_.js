const obj = {
  my_name: "nice",
  wo_de_jia: {
    zu_fang: "guangzhou",
    jia: "heyuan",
    zu_ji: "maoming",
  },
}

/*
转换为：
{
  myName: 'nice',
  woDeJia: { jia: 'heyuan', zuFang: 'guangzhou', zuJi: 'maoming' },
}
*/
function format(obj, data = {}) {
  for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      let element = obj[key]
      key = key.replace(/\_(\w)/g, (a, b) => {
        return b.toUpperCase()
      })

      if (element && typeof element === "object") {
        element = format(element)
      }
      data[key] = element
    }
  }
  return data
}
console.log("format(obj): ", format(obj))
