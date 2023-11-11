import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service';
import { ViewDidEnter } from '@ionic/angular';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements ViewDidEnter {

  constructor(
    public proS: ProductosService
  ) { }
  ionViewDidEnter(): void {
    this.proS.consultarProductos();
  }



}
