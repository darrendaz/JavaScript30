
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('hello i am a %s string!', '💩💩');

// Styled
console.log('%c i am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');

// warning!
console.warn('Example Warning');

// Error :|
console.error('Example Error');

// Info
console.info('Example info');

// Testing
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'That is wrong')

// clearing
console.clear()

// Viewing DOM Elements
console.dir(p)
console.clear()

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd();
})

// counting
console.count('D')
console.count('D')
console.count('G')
console.count('D')
console.count('G')
console.count('D')
console.count('G')
console.count('D')
console.count('G')
console.count('D')
console.count('G')
console.count('D')
console.count('G')


// timing
console.time('fetching data')
fetch('https://api.github.com/users/darrendaz')
    .then(data => data.json())
    .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
    })

// table

console.table(dogs)