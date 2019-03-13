import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: "First page tabs",
      path: "/menu/first"
    },
    {
      title: "Second Blank",
      path: "/menu/second"
    }
  ];

  selecedPath: string = '';

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selecedPath = event.url;
      }
    })
  }


  ngOnInit() {
  }

}
