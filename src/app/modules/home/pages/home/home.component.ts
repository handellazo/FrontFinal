import { Component, OnInit,inject } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  status:boolean = true;
  nombre:string = '.'
  _SidebarService = inject(SidebarService)


  ngOnInit(): void {
    this._SidebarService.sidebarEffectButton$.subscribe(status =>{
    this.status = status
    })

    
  }

}
