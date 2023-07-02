'use strict';

const arr = [1, 5, 4, 2, 3];

console.log('map');

Array.prototype.mapp = function(callback) {
    const temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this));
    }

    return temp;
};

const newArr = arr.mapp(function(x, index) {
    if (index % 2 == 1) {
        return x**2;
    } else return x;
});
console.log(newArr);

console.log('reduce');

Array.prototype.reducer = function(callback, initValue) {
    let temp;

    initValue !== undefined ? temp = initValue : temp = this[0];

    for (let i = 0; i < this.length; i++) {
        if (temp === this[i]) continue;
        temp = callback(temp, this[i], i, this);
    }

    return temp;
};

const arrReduce = arr.reducer(function(accum, current, index) {
    if (index % 2 == 0) return accum * current;
    else return accum;
});
console.log(arrReduce);
console.log(arr.reduce(function(accum, current, index) {
    if (index % 2 == 0) return accum * current;
    else return accum;
}));

const users = [
    { id: "1", name: "John" },
    { id: "2", name: "Anna" },
    { id: "3", name: "Kate" },
];
  
const usernamesById = users.reducer(function (result, user) {
        return {
            ...result,
            [user.id]: user.name,
        }
    }, {});
console.log(usernamesById);

console.log('filter');

Array.prototype.filters = function(callback) {
    const temp = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
            temp.push(this[i]);
    }

    return temp;
};

const arrFilter = arr.filters(x => x > 3);
console.log(arrFilter);
console.log(arr.filter(x => x > 3));


const cities = [
    {name: 'Moscow', population: 12506468},
    {name: 'Saint Petersburg', population: 5351935},
    {name: 'Novosibirsk', population: 1612833},
    {name: 'Kaliningrad', population: 482443},
    {name: 'Kaluga', population: 336726}
];

const millionPlusCities = cities.filter(function (e) {
    return e.population > 1000000;
  });

const millionPlusCitie = cities.filters(function (e) {
    return e.population > 1000000;
  });

console.log(millionPlusCities);
console.log(millionPlusCitie);

console.log('every');

Array.prototype.everys = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this))
            return false;
    }

    return true;
};

console.log([4, 2, 6].everys(x => x % 2 == 0));

console.log('some');

Array.prototype.somes = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
            return true;
    }

    return false;
};

console.log([4, 1, 6].somes(x => x % 2 != 0));