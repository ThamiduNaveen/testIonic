import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-load',
  templateUrl: './video-load.component.html',
  styleUrls: ['./video-load.component.scss'],
})
export class VideoLoadComponent implements OnInit {

  @Input('videoList') videoList;
  @Input('sizeCol') sizeCol;


  constructor() { }

  ngOnInit() {
    
  }

}
