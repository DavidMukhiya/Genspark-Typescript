import Jukebox from './jukebox'
import Song from "./song";

let song1 = new Song("Let it be", "Beatles");
let song2 = new Song("I want it that way", "Backstreet Boys");
let song3 = new Song("Wake me up when september ends", "Green Day");
let songList1:Song[]=[];
songList1.push(song1)
songList1.push(song2)
songList1.push(song3)


let playlist1 = new Jukebox(songList1);
let newSong = new Song("You belong with me", "Taylor Swift");
playlist1.addSong(newSong)
playlist1.playRandomSong();
