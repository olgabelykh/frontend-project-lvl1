#!/usr/bin/env node
import game, { ANNOUNCEMENT } from '../src/games/brain-progression.js';
import gamePlayer from '../src/gamePlayer.js';

gamePlayer(game, ANNOUNCEMENT);
