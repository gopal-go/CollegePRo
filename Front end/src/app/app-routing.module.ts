import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { NewletterComponent } from './newletter/newletter.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ServicesComponent } from './services/services.component';
import { BookComponent } from './book/book.component';
import { BookacComponent } from './bookac/bookac.component';
import { TybookComponent } from './tybook/tybook.component';
import { BookfridgeComponent } from './bookfridge/bookfridge.component';
import { BooklaptopComponent } from './booklaptop/booklaptop.component';
import { BookledComponent } from './bookled/bookled.component';
import { BookwmComponent } from './bookwm/bookwm.component';
import { BookoeaComponent } from './bookoea/bookoea.component';
import { BookdoneComponent } from './bookdone/bookdone.component';
import { BooktykailashComponent } from './booktykailash/booktykailash.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [   
  { path: '', redirectTo: '/Home',pathMatch:'full'},
  { path:'Home', component:HeroComponent},
  { path:'services',component:ServicesComponent},
  { path:'Features', component:FeaturesComponent},
  { path:'Team', component:TeamComponent},
  { path:'Newletter', component:NewletterComponent},
  { path:'Contact', component:ContactComponent},    
  { path:'login', component:LoginComponent},
  { path:'signin', component:SigninComponent},    
  { path:'book', component:BookComponent},
  { path:'bookac',component:BookacComponent},
  { path:'tybook',component:TybookComponent},
  { path:'bookfridge',component:BookfridgeComponent},
  { path:'booklaptop',component:BooklaptopComponent},
  { path:'bookled',component:BookledComponent}, 
  { path:'bookwm',component:BookwmComponent},   
  { path:'bookfridge',component:BookfridgeComponent},  
  { path:'bookoea',component:BookoeaComponent},
  { path:'bookdone',component:BookdoneComponent}, 
  { path:'booktykailash',component:BooktykailashComponent},
  { path:'faq',component:FaqComponent},
  { path:'privacy',component:PrivacyComponent},
  { path:'view',component:ViewComponent}                       
]; 
                                                              







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
