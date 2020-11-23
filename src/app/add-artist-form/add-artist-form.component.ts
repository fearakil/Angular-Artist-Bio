import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
// import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { Artist } from '../shared/artists'

@Component({
  selector: 'app-add-artist-form',
  templateUrl: './add-artist-form.component.html',
  styleUrls: ['./add-artist-form.component.scss']
})
export class AddArtistFormComponent implements OnInit {

@Input() artist: Artist = new Artist('', '');
@Output() formSubmit: EventEmitter<Artist> = new EventEmitter  
       
  constructor() { }

  onSubmit(form: NgForm){
    console.log(this.formSubmit.emit(form.value));
  }
  ngOnInit(): void {
  }

}
 
