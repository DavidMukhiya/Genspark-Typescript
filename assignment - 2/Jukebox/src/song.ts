export default class Song {
  title: string;
  artist: string;

  constructor(title: string, artist: string) {
    this.title = title;
    this.artist = artist;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getArtist(): string {
    return this.artist;
  }

  setArtist(artist: string): void {
    this.artist = artist;
  }

}
