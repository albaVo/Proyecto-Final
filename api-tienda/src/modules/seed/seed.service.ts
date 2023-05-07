import { Injectable } from '@nestjs/common';

import { ProveedoresService } from '../proveedores/proveedores.service';
import { ProductosService } from '../productos/productos.service';

import dataProveedores from '../seed/data/proveedores.json'
import dataProductos from '../seed/data/productos.json'

@Injectable()
export class SeedService {
  
  constructor(
    private readonly proveedoresService: ProveedoresService,
    private readonly productosService: ProductosService
  ){}

  async runData() {
    // Insertar todos los datos
    await this.insertNewProveedores()
    await this.insertNewProductos()

    return 'Datos insertados con éxito'
  }

  private async insertNewProveedores() {
    // Elimina primero los datos
    await this.proveedoresService.deleteAllProveedores()

    const insertPromises = []
    dataProveedores.forEach((proveedor) => {
      insertPromises.push(this.proveedoresService.create(proveedor))
    })
    await Promise.all(insertPromises)
    return true
  }

  private async insertNewProductos() {
    // Elimina primero los datos
    await this.productosService.deleteAllProductos()

    const insertPromises = []
    dataProductos.forEach((producto) => {
      insertPromises.push(this.productosService.create(producto))
    })
    await Promise.all(insertPromises)
    return true
  }
}
