import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { YtService } from './yt.service';

import { HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
//import { VideoLoadComponent } from './video-load/video-load.component';
//import { YoutubePipe } from './youtube.pipe';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    YtService,
    YoutubeVideoPlayer,
    ScreenOrientation,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
