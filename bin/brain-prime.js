#!/usr/bin/env node
import game, { ANNOUNCEMENT } from '../src/games/brain-prime.js';
import gamePlayer from '../src/gamePlayer.js';

gamePlayer(game, ANNOUNCEMENT);
