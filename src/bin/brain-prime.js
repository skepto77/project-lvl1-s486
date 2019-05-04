#!/usr/bin/env node
import { gameRules, getDataGame } from '../games/prime';
import { runGame } from '..';

runGame(gameRules, getDataGame);
