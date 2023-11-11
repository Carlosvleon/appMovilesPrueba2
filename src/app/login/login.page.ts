  import { Component, OnInit } from '@angular/core';
  import { AuthService } from './../servicio/auth.service';
  import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
  //        Servicio,   Clase de tipo
  @Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
  })
  export class LoginPage implements OnInit {
    public formularioLogin: FormGroup;
    constructor(
      private formBuilder: FormBuilder,
      public auth: AuthService
    ) {
      this.formularioLogin = formBuilder.group({
        usuario: ['',
                  [ Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(10)
                  ]],
        password: ['',
                    [ Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(10)
                  ] ]
      });
    }
    public logearse(){
      if(!this.formularioLogin.valid){
        alert("Formulario incorrecto :(");
        this.formularioLogin.controls['usuario'].setValue("");
        this.formularioLogin.controls['password'].setValue("");
        this.formularioLogin.clearValidators();
        return
      }

      this.auth.logearse(
        this.formularioLogin.controls["usuario"].value, // usuario
        this.formularioLogin.controls["password"].value // password
      );
    }

    ngOnInit() {
    }

  }
