import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
   form: FormGroup = new FormGroup(
    {
    username: new FormControl(''),
    password: new FormControl(''),
    
  }); 
  constructor(private router: Router) { };

   submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  } 

   @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
 
  goToMainPage():void {
    this.router.navigate(['/main']);
  }
} 




