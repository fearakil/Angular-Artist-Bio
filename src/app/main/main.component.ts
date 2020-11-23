// import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UpdateArtist } from '../artist-list/artist-list.component';
import { Artist } from '../shared/artists'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  artist: Artist[] = new Array<Artist>()

  // description: Artist[] = new Array<Artist>()

  constructor() { }

  ngOnInit(): void {
  }
  // , newDescription: Artist
  addArtist(newArtist: Artist){
    this.artist.push(newArtist);
    // this.description.push(newDescription)
  }
  // , description: Artist
  deleteArtist(artist: Artist){
    let index = this.artist.indexOf(artist)
    // let i =this.description.indexOf(description)
    this.artist.splice(index,1);
    // this.description.splice(index,1);
  }

  updateArtist(updateArtist: UpdateArtist){
    this.artist[this.artist.indexOf(updateArtist.old)] = updateArtist.new;
    // this.description[this.description.indexOf(updateArtist.old)] = updateArtist.new;
  }
  

}
