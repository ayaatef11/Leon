import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


// Define Routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // 👈 Important: Register routes

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class AppModule { }
