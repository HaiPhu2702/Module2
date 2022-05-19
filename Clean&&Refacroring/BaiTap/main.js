"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tennis_1 = require("./Tennis");
var Player_1 = require("./Player");
var Player1 = new Player_1.Player("phu", 5);
var Player2 = new Player_1.Player("p", 4);
var tennis = new Tennis_1.Tennis(Player1, Player2);
// console.log(tennis);
console.log(tennis.CompareToScore());
