import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from '../shared/artists'
import { MatDialog } from '@angular/material/dialog';
import { EditArtistModalComponent } from '../edit-artist-modal/edit-artist-modal.component';

export interface UpdateArtist{
  old:Artist;
  new:Artist;
}

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

@Input() artistName: Artist[] = [];
        //  description: Artist[] = []; 

@Output() delete: EventEmitter<Artist> = new
EventEmitter<Artist>();
@Output() update: EventEmitter<UpdateArtist> =new EventEmitter<UpdateArtist>();

  constructor(public dialog:MatDialog) { }

  onDelete(artist:Artist){
    this.delete.emit(artist);
  }
  onCardClicked(artist: Artist){
    const dialogref = this.dialog.open(EditArtistModalComponent, {
      width: '580px',
      data: artist
    })

    dialogref.afterClosed().subscribe(result=>{
      if(result){
        this.update.emit({
          old:artist,
          new:result
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
