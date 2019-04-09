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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipeComponent } from './pipe/pipe.component';
import { SquareRootPipe } from './pipes/square-root.pipe';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { FormComponent } from './form/form.component'
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import{EmployeesService} from './employees.service';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { DirectiveComponent } from './directive/directive.component'
import { HighchartsChartModule } from 'highcharts-angular';
import { MybuttonDirective } from './mybutton.directive';


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
  { path: 'pipe', component: PipeComponent,  },
  { path: 'form', component: FormComponent,  },
  { path: 'reactive-form', component: ReactiveFormComponent,  },
  { path: 'employee-list', component: EmployeeListComponent,  },
  { path: 'employee-details', component: EmployeeDetailsComponent,  },
  { path: 'hightchart', component: HighchartsComponent,  },
  { path: 'directives', component: DirectiveComponent,  },
  


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
    AnimationComponent,
    PipeComponent,
    SquareRootPipe,
    MultiplyPipe,
    FormComponent,
    ReactiveFormComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    HighchartsComponent,
    DirectiveComponent,
    MybuttonDirective
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
     RouterModule.forRoot(appRoutes),
     FormsModule,
     ReactiveFormsModule,
     HighchartsChartModule

  ],
  providers: [colors, chartColor,EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
