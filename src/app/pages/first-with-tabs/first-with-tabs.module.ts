import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FirstWithTabsPage } from './first-with-tabs.page';
//import { VideoLoadComponent } from 'src/app/video-load/video-load.component';

const routes: Routes = [
  {
    path: 'tabs',
    children: [
      { path: 'tab1', loadChildren: '../tab1/tab1.module#Tab1PageModule' },
      { path: 'tab2', loadChildren: '../tab2/tab2.module#Tab2PageModule' },
      { path: 'tab2/details', loadChildren: '../details/details.module#DetailsPageModule' }
    ],
    component: FirstWithTabsPage
  },
  { path: '', redirectTo: 'tabs/tab1', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [FirstWithTabsPage]
})
export class FirstWithTabsPageModule { }
