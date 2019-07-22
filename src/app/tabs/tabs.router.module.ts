import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'arabica',
        children: [
          {
            path: '',
            loadChildren: '../arabica/arabica.module#ArabicaPageModule'
          }
        ]
      },
      {
        path: 'robusta',
        children: [
          {
            path: '',
            loadChildren: '../robusta/robusta.module#RobustaPageModule'
          }
        ]
      },
      {
        path: 'liberica',
        children: [
          {
            path: '',
            loadChildren: '../liberica/liberica.module#LibericaPageModule'
          }
        ]
      },
      {
        path: 'teknik',
        children: [
          {
            path: '',
            loadChildren: '../teknik/teknik.module#TeknikPageModule'
          }
        ]
      },
      {
        path: 'yosino',
        children: [
          {
            path: '',
            loadChildren: '../yosino/yosino.module#YosinoPageModule'
          }
        ]
      },
      {
        path: 'blois',
        children: [
          {
            path: '',
            loadChildren: '../blois/blois.module#BloisPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
