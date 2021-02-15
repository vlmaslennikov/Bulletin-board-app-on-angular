import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostBodyComponent } from './post-body/post-body.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainPageComponent} from './main-page/main-page.component';
import { AdvertComponent } from './advert/advert.component';

const appRoutes:Routes=[

  { path: '', component:AdvertComponent},
  { path: 'authorization', component:AuthorizationComponent},
  { path: 'new-advert', component:MainPageComponent},
  { path: '**', component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostBodyComponent,
    AuthorizationComponent,
    NotFoundComponent,
    MainPageComponent,
    AdvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
