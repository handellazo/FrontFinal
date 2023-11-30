import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
constructor(private usuarioservice: UsuarioService){}
ngOnInit(): void {
  this.usuarioservice.listarusuario().subscribe(data=>{
    console.log(data)
  })
}
}
