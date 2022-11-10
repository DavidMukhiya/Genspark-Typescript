"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Song {
    constructor(title, artist) {
        this._title = title;
        this._artist = artist;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get artist() {
        return this._artist;
    }
    setArtist(artist) {
        this._artist = artist;
    }
}
exports.default = Song;
//# sourceMappingURL=song.js.map