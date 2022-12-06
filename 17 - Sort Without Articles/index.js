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

function alphabetize(bands) {
  const output = normalizeArrayOfStrings(bands).sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });

  console.log(output);
}

function normalizeArrayOfStrings(bands) {
  return bands.map((band) =>
    band.toLowerCase().replace(/^([aA]\s|[aA]n\s|[tT]he\s|)/, '')
  );
}

window.addEventListener('load', alphabetize(bands));
