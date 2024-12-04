import { Inject, inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(@Inject('CATEGORIA_REPOSITORY') private categoriaRepository:Repository<Categoria>){}

  async create(createCategoriaDto: createCategoriaDto) {
    const categoria = new Categoria()
    categoria.nombre=createCategoriaDto.nombre
    categoria.detalle=createCategoriaDto.detalle
    return await this.categoriaRepository.save(categoria)
  }

  create(createCategoriaDto: CreateCategoriaDto) {
    return 'this action adds a new categoria';
  }

  private baseUrl = environment.urlServidor
  private http=inject(HttpClient)

  funListar(){
    return this.http.get(`${this.baseUrl}/categoria`)
  }

  funGuardar (registro: any){
    return this.http.post(`${this.baseUrl}/categoria`,registro)
  }


}
