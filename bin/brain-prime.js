#!/usr/bin/env node
import game, { ANNOUNCEMENT } from '../src/games/brain-prime.js';
import runGame from '../src/runGame.js';

runGame(game, ANNOUNCEMENT);
