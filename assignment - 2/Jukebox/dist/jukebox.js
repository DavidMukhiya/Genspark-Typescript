"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const song_1 = __importDefault(require("./song"));
class Jukebox {
    constructor(playlist) {
        this.playlist = [];
        this.playlist = playlist;
    }
    addSong(song) {
        console.log(`${song.getTitle} song by ${song.getArtist} is added to playlist`);
        this.playlist.push(song);
    }
    playRandomSong() {
        this.playlist.sort(() => Math.random() - 0.5);
        console.log(this.playlist);
    }
}
let song1 = new song_1.default("Let it be", "Beatles");
let song2 = new song_1.default("I want it that way", "Backstreet Boys");
let song3 = new song_1.default("Wake me up when september ends", "Green Day");
let songList1 = [];
songList1.push(song1);
songList1.push(song2);
songList1.push(song3);
let playlist1 = new Jukebox(songList1);
let newSong = new song_1.default("You belong with me", "Taylor Swift");
playlist1.addSong(newSong);
playlist1.playRandomSong();
//# sourceMappingURL=jukebox.js.map