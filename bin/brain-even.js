#!/usr/bin/env node
import game, { ANNOUNCEMENT } from '../src/games/brain-even.js';
import gamePlayer from '../src/gamePlayer.js';

gamePlayer(game, ANNOUNCEMENT);
