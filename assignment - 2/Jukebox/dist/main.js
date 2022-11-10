"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jukebox_1 = __importDefault(require("./jukebox"));
const song_1 = __importDefault(require("./song"));
let song1 = new song_1.default("Let it be", "Beatles");
let song2 = new song_1.default("I want it that way", "Backstreet Boys");
let song3 = new song_1.default("Wake me up when september ends", "Green Day");
let songList1 = [];
songList1.push(song1);
songList1.push(song2);
songList1.push(song3);
let playlist1 = new jukebox_1.default(songList1);
let newSong = new song_1.default("You belong with me", "Taylor Swift");
playlist1.addSong(newSong);
playlist1.playRandomSong();
//# sourceMappingURL=main.js.map