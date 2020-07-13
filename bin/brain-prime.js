#!/usr/bin/env node
import game, { ANNOUNCEMENT } from '../src/games/game-brain-prime.js';
import playGame from '../src/playGame.js';

playGame(game, ANNOUNCEMENT);
