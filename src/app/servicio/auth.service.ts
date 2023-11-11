import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay } from 'rxjs';
import { IUsuario } from '../modelos/IUsuario';
import { Router } from '@angular/router';
// Importamos el servicio para hacer las peticiones
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Observador del cargando
  private cargando: BehaviorSubject<boolean> =
  new BehaviorSubject(false);
  // Observador publico
  public $cargando = this.cargando.asObservable();
  // Observador del IUsuario
  private usuarioActivo: BehaviorSubject<IUsuario | null> =
  new BehaviorSubject<IUsuario | null>(null);
  // observador publico
  public $usuarioActivo = this.usuarioActivo.asObservable();
  private readonly URL_LOGIN = "https://dummyjson.com/auth/login";
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  public logearse(usuario: string, password: string){
    this.cargando.next(true);
    this.http.post<IUsuario>(this.URL_LOGIN,
       JSON.stringify({
        username: usuario,
        password
      }),
      {
      headers: {
        "Content-Type":"application/json"
      }
    }
    )
    .pipe(delay(2000))
    .subscribe( resultado => {
      this.usuarioActivo.next(resultado);
      this.cargando.next(false);
      this.router.navigate(['perfil']);
    });

  }
}
