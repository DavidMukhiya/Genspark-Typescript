"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jukebox {
    constructor(playlist) {
        this.playlist = [];
        this.playlist = playlist;
    }
    addSong(song) {
        console.log(`${song.title} song by ${song.artist} is added to playlist`);
        this.playlist.push(song);
    }
    playRandomSong() {
        this.playlist.sort(() => Math.random() - 0.5);
        console.log(this.playlist);
    }
}
exports.default = Jukebox;
//# sourceMappingURL=jukebox.js.map