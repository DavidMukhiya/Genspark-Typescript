export default class Song {
  _title: string;
  _artist: string;

  constructor(title: string, artist: string) {
    this._title = title;
    this._artist = artist;
  }

  get title() {
    return this._title;
  }

  set title(title: string){
    this._title = title;
  }

  get artist(){
    return this._artist;
  }

  setArtist(artist: string){
    this._artist = artist;
  }

}
