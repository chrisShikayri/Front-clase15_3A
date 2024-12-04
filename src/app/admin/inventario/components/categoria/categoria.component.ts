import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormGroup, FormControl } from '@angular/forms';

interface categoria {
  id?: number,
  nombre: string;
  detalle?: string

}


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit{

  private CategoriaService = inject(CategoriaService)

  categorias: categoria[]=[]
  dialog_visible: boolean=false;
  CategoriaForm= new FormGroup({
    nombre: new FormControl(''),
    detalle: new FormControl ('')
  })

  ngOnInit(): void {
    this.getCategorias()
  }

  getCategorias(){
    this.CategoriaService.funListar().subscribe(
      (res:any)=>{
        this.categorias=res;
      },
      (error:any)=> {
        console.log(error);
      }
      
    )

  }

  mostrarDialog(){
    this.dialog_visible=true;

  }

  guardarCategoria(){
    this.CategoriaService.funGuardar(this.CategoriaForm.value).subscribe(
      (res: any) => {
        this.dialog_visible = false;
        this.getCategorias();
      },
      (error: any) => {
        console.log(error);
      }
    );
    

  }

}
