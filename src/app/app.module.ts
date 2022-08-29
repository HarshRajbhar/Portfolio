import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsModule } from './about-us/about-us.module';
import { ServicesModule } from './services/services.module';
import { WorkModule } from './work/work.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AboutUsModule,
    WorkModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
