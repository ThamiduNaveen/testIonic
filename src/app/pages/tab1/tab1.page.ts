import { Component, OnInit } from '@angular/core';
import { YtService } from 'src/app/yt.service';
import { Observable } from 'rxjs';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  playlists: Observable<any[]>
  channelId: string = "UCUNhp8GwzVYXmLpfL50lh6w"

  constructor(
    private ytSer: YtService,
    private youTube:YoutubeVideoPlayer,
    private plt:Platform
  ) { }

  ngOnInit() {
  }

  searchPlayList() {
    this.playlists = this.ytSer.getPlayListForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log("data :", data)
    }, err => {
      console.log("data :", err)
    })
  }

  openYoutube() {
    if(this.plt.is('cordova')){
      this.youTube.openVideo("bxSeaUpC0ts")
    }
  }



}
