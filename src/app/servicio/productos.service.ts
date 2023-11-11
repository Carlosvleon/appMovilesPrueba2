import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproductos, RespuestaProducto } from '../modelos/IProductos';
import { LoadingController } from '@ionic/angular';
import { delay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // Agregar el valor al skip XD
  private readonly URL_PRODUCTO = "https://dummyjson.com/products?skip="
  public productos: Iproductos[] = [];
  private skip = 0;
  private limite = 0;
  constructor(
    private http: HttpClient,
    private loading: LoadingController
  ) { }

  public async consultarProductos(){
    const control = await this.loading.create({
      message: "Cargando productos..."
    });
    control.present();
    this.http.get<RespuestaProducto>(`${this.URL_PRODUCTO}${this.skip}`)
    .pipe(delay(1000))
    .subscribe( respuesta => {
      control.dismiss();
      this.skip = this.skip + respuesta.limit;
      this.limite = respuesta.limit;
      this.productos = this.productos.concat(respuesta.products);
    });
  }

}
