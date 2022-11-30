// start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2);
age = 200
console.log(age, age2);

let name = 'Darren'
let name2 = name
console.log(name, name2);
name = 'Rudy'
console.log(name, name2)

// Let's say we have an array
const players = ['Darren', 'Reggie', 'Isaac', 'Jerry'];

// and we want to make a copy of it.
const team = players;

console.log(players, team)

// You might think we can just do something like this:
team[3] = 'Manny'

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice()

// or create a new array and concat the old one in
const team4 = [].concat(players)

// or use the new ES6 Spread
const team3 = ['Before spread', ...players, 'OH WOW']

team4[3] = 'LeBron'
team4.splice(0, 0, 'first')

console.log(team2, team3, team4)

const team5 = Array.from(players)
team5[3] = 'Luka'
console.log(team5)

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Charlie Brown',
    age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 99

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99})
console.log(cap2)

// using ...spread

const cap3 = {...person}

const dar = {
    name: 'darren',
    age: 100,
    social: {
        twitter: '@darrendaz',
        facebook: 'darren.l',
        object: {id: 1, task: 'update list'}
    }
}

console.log(dar)
const dev = Object.assign({}, {...dar, age:2000})

const dev2 = JSON.parse(JSON.stringify(dar))