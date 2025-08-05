import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
 
  btnText!: string;
  isUserSnapped!: boolean;

  ngOnInit(): void {
    
    this.btnText = 'Snap It';
    this.isUserSnapped = false;

    }

  onSnap(): void {
    if(this.isUserSnapped){
      this.unSnap();
    }
    else{
      this.snap();
    }
  }

  unSnap(){
    this.faceSnap.removeSnap();
    this.btnText = 'Snap It';
    this.isUserSnapped = false;
  }

  snap(){
    this.faceSnap.addSnap();
    this.btnText = 'UnSnap';
    this.isUserSnapped = true;
  }

}
