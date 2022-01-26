import { Component } from '@angular/core';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {


  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Eyder Suarez',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear Solid'
      },
      {
        id: 2,
        nombre: 'DeathStranding'
      }
    ],
  }


  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = ''

  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  guardar() {
    console.log('Formulario posteado');
    
  }

}
