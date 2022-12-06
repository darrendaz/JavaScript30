const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

function alphabetize(arrayOfStrings) {
  const output = arrayOfStrings.sort((a, b) =>
    normalizeString(a) > normalizeString(b) ? 1 : -1
  );

  return output;
}

function normalizeString(string) {
  return string.replace(/^(a |an |the )/i, '');
}

document.querySelector('#bands').innerHTML = alphabetize(bands)
  .map((bandName) => `<li>${bandName}</li>`)
  .join('');
