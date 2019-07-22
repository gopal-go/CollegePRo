import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { NewletterComponent } from './newletter/newletter.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { BookComponent } from './book/book.component';
import { BookacComponent } from './bookac/bookac.component';
import { TybookComponent } from './tybook/tybook.component';
import { BooklaptopComponent } from './booklaptop/booklaptop.component';
import { BookwmComponent } from './bookwm/bookwm.component';
import { BookledComponent } from './bookled/bookled.component';
import { BookfridgeComponent } from './bookfridge/bookfridge.component';
import { BookoeaComponent } from './bookoea/bookoea.component';
import { BookdoneComponent } from './bookdone/bookdone.component';
import { BooktykailashComponent } from './booktykailash/booktykailash.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    TeamComponent,
    NewletterComponent,
    ContactComponent,
    LoginComponent,
    SigninComponent,
    ServicesComponent,
    FooterComponent,
    BookComponent,
    BookacComponent,
    TybookComponent,
    BooklaptopComponent,
    BookwmComponent,
    BookledComponent,
    BookfridgeComponent,
    BookoeaComponent,
    BookdoneComponent,
    BooktykailashComponent,
    FaqComponent,
    PrivacyComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
