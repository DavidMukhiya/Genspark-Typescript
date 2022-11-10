"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getArtist() {
        return this.artist;
    }
    setArtist(artist) {
        this.artist = artist;
    }
}
exports.default = Song;
//# sourceMappingURL=song.js.map