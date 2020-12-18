const json = {
  a: {
    b: {
      c: 1,
    },
  },
  d: {
    e: 12,
  },
};

const path = [ "d", "e"];
let p = json;
path.forEach((k) => {
  p = p[k];
});

console.log(p);
