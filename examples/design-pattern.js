
// 深克隆
const deepClone = function(obj) {
   let newObj = Array.isArray(obj) ? [] : {}
   if (obj && typeof obj === 'object') {
       for (let field in obj) {
           if (obj.hasOwnProperty(field)) {
                if (obj[field] && typeof obj[field] === 'object') {
                    newObj[field] = deepClone(obj[field])
                } else {
                    newObj[field] = obj[field]
                }
           }
       }
   }

   return newObj
}

var a = {
    a: 'a',
    b: 1,
    c: null,
    d: NaN,
    e: undefined,
    f: [1, 2, 3],
    g: {
        a: 'a',
        b: 1,
        c: null,
        d: NaN,
        e: undefined,
        f: [1, 2, 3],
        h: function() {}
    },
    h: function() {}
}
var b = deepClone(a)

b.f[0] = 111

// console.log(a)
// console.log(b)
