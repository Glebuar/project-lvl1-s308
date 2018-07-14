#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '..';

console.log('Welcome to the Brain Games!\n');

readlineSync.question('May I have your name?\n');
console.log(`Hello, ${userName}!\n`);
