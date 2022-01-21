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

  guardar() {
    console.log('Formulario posteado');
    
  }

}
