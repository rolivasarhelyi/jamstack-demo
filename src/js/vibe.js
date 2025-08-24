const vibes = [
  'You are great!',
  'You are amazing!',
  'You are a great person!',
  'You are a great friend!',
  'You are a great partner!',
  'You are a great parent!',
  'You are a great sibling!',
  'You are a great child!',
  'You are a great adult!',
];

// get a random vibe from the vibes array
let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector('.vibe').append(vibe);
