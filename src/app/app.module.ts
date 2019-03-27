import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { colors, chartColor} from './appcolors/mycolors';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeamComponent } from './team/team.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServicesComponent } from './services/services.component';
import { SeoComponent } from './seo/seo.component';
import { PpcComponent } from './ppc/ppc.component';
import { AnimationComponent } from './animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



const appRoutes: Routes = [
  { path: '', component: HomeComponent,  },
  { 
    path: 'about', 
    children : [
      { path: '', component: AboutComponent,  },
      { path: 'team', component: TeamComponent,  },
      
    ]
  },
  { path: 'services', component: ServicesComponent,
    children : [
      { path: 'seo', component: SeoComponent,  },
      { path: 'ppc', component: PpcComponent,  },
    ]
  },
  { path: 'animation', component: AnimationComponent,  },
  


  { path: '**', component: PagenotfoundComponent,  },
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponent,
    TeamComponent,
    ServicesComponent,
    SeoComponent,
    PpcComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [colors, chartColor],
  bootstrap: [AppComponent]
})
export class AppModule { }
