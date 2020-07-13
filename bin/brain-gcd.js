#!/usr/bin/env node
import game, { ANNOUNCEMENT } from '../src/games/brain-gcd.js';
import runGame from '../src/runGame.js';

runGame(game, ANNOUNCEMENT);
