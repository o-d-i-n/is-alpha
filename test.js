import isAlpha from './index';
import test from 'ava';

[
  {value: `Dude bro....`, expected: true},
  {value: `Hello 1 am an a1phanum3ric string`, expected: false},
  {value: `Hello dude; [I am also a string (with punctuations, and stuff!)]`, expected: true},
].map(Case => test(Case.value, t => t.is(isAlpha(Case.value), Case.expected)) );
