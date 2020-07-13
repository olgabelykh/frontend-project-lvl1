#!/usr/bin/env node
import game, { ANNOUNCEMENT } from '../src/games/brain-even.js';
import runGame from '../src/runGame.js';

runGame(game, ANNOUNCEMENT);
