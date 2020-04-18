import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-management-login',
  templateUrl: './management-login.component.html',
  styleUrls: ['./management-login.component.css']
})
export class ManagementLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private formBuilder: FormBuilder
    ) { 
      let token = localStorage.getItem('cutie-plushie-token')
      if(token != null){
        this.router.navigate(['management/home']);
      }

      this.loginForm = this.formBuilder.group({
        user: new FormControl('', [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9)
        ]),
        password: new FormControl('', [
          Validators.required
        ])
      });
    }

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.submitted = true;
    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      //alert("Por favor introduzca su usuario y contraseña para poder ingresar.");}
      
      return;
    }

    this.validate(this.loginForm.controls.user.value, this.loginForm.controls.password.value).subscribe(
      
    );
  }

  public validate(key: string, password: string) {
    password = btoa(password);
    return this.http.post(
      '/api/v1/management/login', 
      {'key' : key, 'pwd' : password}, 
      {observe: 'response', responseType: 'json'}
    )
  }
}
