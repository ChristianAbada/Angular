import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Kintango',
        'Le shidoshi de Kunta Kinte',
        'https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_640.jpg',
        new Date(),
        12
      ),

      new FaceSnap(
        'Queen Lioness',
        'La Reine de la jungle',
        'https://cdn.pixabay.com/photo/2022/10/31/20/27/lioness-7560708_640.jpg',
        new Date(),
        23
      ),

      new FaceSnap(
        '007',
        'My name is Bond, James Bond !',
        'https://cdn.pixabay.com/photo/2023/07/27/22/08/ai-generated-8154131_640.png',
        new Date(),
        55
      )

    ]; 
    
    this.faceSnaps[1].setLocation('Rumble in the Jungle');
    this.faceSnaps[2].setLocation('Un gars de Nkoabang');
  }


}
