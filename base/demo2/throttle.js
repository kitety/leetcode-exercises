function throttle(fn, delay) {
  let canrun = true
  return function () {
    if (!canrun) {
      return
    }
    canrun = false
    settimeout(() => {
      canrun = true
      fn.call(this, arguments)
    }, delay)
  }
}
