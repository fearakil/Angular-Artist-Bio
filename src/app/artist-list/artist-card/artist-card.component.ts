import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from 'src/app/shared/artists';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

@Input() artist: Artist | any;

// output for the xbutton(deleting the card) and cardClick action(updating the card)
@Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
@Output() cardClick: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }
  onXButtonClick(){
    //send signal to the x button to delete the card
    this.xButtonClick.emit()
  }

  onCardClick(){
    this.cardClick.emit()
  }
  ngOnInit(): void {
  }

}
