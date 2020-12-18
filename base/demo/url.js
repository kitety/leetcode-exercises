function sendRequest (urls, num, callback) {
  (function request (res) {
    urls.length ?
      Promise.all(urls.splice(0, num).map(url => fetch(url))).then(r => request(res.concat(r)))
      : callback(res);
  })([]);
}



function sendRequest (urls, max, callback) {
  let finished = 0;
  let total = urls.length
  const handler = () => {
    if (urls.length) {
      const url = urls.shift();
      fetch(url).then(() => {
        finished++;
        handler()
      })
    }
    if (finished >= total) {
      callback()
    }

  }
  for (let i = 0; i < max; i++) {
    handler()

  }
}
