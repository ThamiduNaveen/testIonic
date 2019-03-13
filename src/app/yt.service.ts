import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YtService {

  apiKey: string = "AIzaSyCeSiJWg5Oy0ZDC3EBJw-VacPBI5SLYQwo";

  constructor(public http: Http) { }

  getPlayListForChannel(channel) {
    
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20').pipe(
      map(res => {
        return res.json()['items'];
      })
    );
  }

  getListVideos(listId) {
    this.http.get('https://www.googleapis.com/youtube/v3/playlistsItems?key=' + this.apiKey + '&playlistId' + listId + '&part=snippet,id&maxResults=20').pipe(
      map(res =>{
        return res.json()['items'];
      })
    );
  }

}
