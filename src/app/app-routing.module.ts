import { ProfilComponent } from './profil/profil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { CongeComponent } from './conge/conge.component';



const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },

{ path: 'main', component: MainComponent },

{ path: 'footer', component: FooterComponent },

{ path: 'navbar', component: NavbarComponent },

{ path: 'signup', component:SignupComponent},

{path :'profil', component:ProfilComponent},

{path:'conge' ,  component:CongeComponent},

{ path: '**', component: PageNotFoundComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
