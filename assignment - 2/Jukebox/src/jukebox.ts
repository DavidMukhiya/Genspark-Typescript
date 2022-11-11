import Song from "./song";
export default class Jukebox {
  playlist: Song[] = [];
  constructor(playlist: Song[]) {
    this.playlist = playlist;
  }

  addSong(song: Song): void {
    //console.log("hello")
    console.log(
        `${song.title} song by ${song.artist} is added to playlist`
      );
    this.playlist.push(song);
   
  }

  playRandomSong(){
    this.playlist.sort(()=>Math.random() - 0.5)
    console.log(this.playlist)
  }
}



