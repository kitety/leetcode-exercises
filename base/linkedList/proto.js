var foo = {}, F = function () { };
Object.prototype.a = 'va'
Function.prototype.b = 'vb'
console.log(foo.a)
console.log(foo.b)
console.log(F.a)
console.log(F.b)
