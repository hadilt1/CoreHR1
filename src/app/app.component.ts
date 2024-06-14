import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router:Router){};
  title = 'CoreHR';
  form: any;

  isLoginPage(){
    console.log(this.router.isActive('/login',{paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'})
    );
    return this.router.isActive('/login', {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'})
  }
    

}
