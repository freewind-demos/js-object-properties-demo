const a = {
    go: 'to'
};

Object.defineProperty(a, 'hello', {
    get: function () {
        return this._hello;
    },
    set: function (value) {
        this._hello = value;
    }
});

console.log(a.hello);

a.hello = "world!";

console.log(a.hello);

console.log('----------- for in ----------------');
for (key in a) {
    console.log(key);
}

console.log('-------- Object.keys --------------');
console.log(Object.keys(a));
