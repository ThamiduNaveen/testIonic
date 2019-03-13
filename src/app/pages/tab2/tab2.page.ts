import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { subscribeOn } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  w: number;
  h: number;
  sub: Subscription;
  sub2: Subscription;
  orientatin: string;
  sizeCol: number = 12;

  videos: any[] = [
    {
      id: "-p78K0Y59oY",
      url: "https://www.youtube.com/embed/-p78K0Y59oY?rel=0",
      name: ""
    },
    {
      id: "BF1Mea2_uHM",
      url: "https://www.youtube.com/embed/-p78K0Y59oY?rel=0",
      name: ""
    },
    {
      id: "HiPP6pCd_HE",
      url: "https://www.youtube.com/embed/HiPP6pCd_HE",
      name: ""
    }
  ]
  constructor(
    private palatform: Platform,
    private screenOrientation: ScreenOrientation,
    private http: Http
  ) {
    this.w = this.palatform.width();
    this.h = this.palatform.height();
  }

  ngOnInit() {
    this.orientatin = this.screenOrientation.type;
    if (this.orientatin.startsWith("portrait")) {
      this.sizeCol = 12;
    } else {
      this.sizeCol = 6;
    }
    this.sub = this.screenOrientation.onChange().subscribe(
      () => {
        this.orientatin = this.screenOrientation.type;
        console.log("Orientation Changed");
        if (this.orientatin.startsWith("portrait")) {
          this.sizeCol = 12;
        } else {
          this.sizeCol = 6;
        }
      }
    );
    this.videos.forEach(video => {
      this.getVideo(video);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
   // this.sub2.unsubscribe();
  }

  getVideo(videoObj) {
    this.http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoObj.id + "&key=" + "AIzaSyCeSiJWg5Oy0ZDC3EBJw-VacPBI5SLYQwo").pipe(
      map(res => {
        return res.json()['items'];
      })
    ).subscribe(data => {
      console.log("data :", data);
      videoObj.name = data[0].snippet.title;
    }, err => {
      console.log("data :", err)
    });
  }

  // searchPlayList(videoId) {
  //   this.name = this.getVideo(videoId);
  //   this.name.subscribe(data => {
  //     console.log("data :", data)
  //   }, err => {
  //     console.log("data :", err)
  //   })
  // }

}
