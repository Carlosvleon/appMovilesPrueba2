import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../modelos/IUsuario';
import { AuthService } from '../servicio/auth.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public usuarioActivo: IUsuario | null = null;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.$usuarioActivo.subscribe(usuario => {
      this.usuarioActivo = usuario;
    });
  }

}
