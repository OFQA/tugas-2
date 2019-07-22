import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tina', loadChildren: './tina/tina.module#TinaPageModule' },
  { path: 'megumin', loadChildren: './megumin/megumin.module#MeguminPageModule' },
  { path: 'nakano', loadChildren: './nakano/nakano.module#NakanoPageModule' },
  { path: 'kotori', loadChildren: './kotori/kotori.module#KotoriPageModule' },
  { path: 'yosino', loadChildren: './yosino/yosino.module#YosinoPageModule' },
  { path: 'blois', loadChildren: './blois/blois.module#BloisPageModule' },
  { path: 'arabica', loadChildren: './arabica/arabica.module#ArabicaPageModule' },
  { path: 'robusta', loadChildren: './robusta/robusta.module#RobustaPageModule' },
  { path: 'liberica', loadChildren: './liberica/liberica.module#LibericaPageModule' },
  { path: 'teknik', loadChildren: './teknik/teknik.module#TeknikPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
