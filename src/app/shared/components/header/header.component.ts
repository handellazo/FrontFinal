import { Component, Inject, Input, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() nombre!:string;
  statusSidebar:boolean = true;
  _sidebarService = inject(SidebarService)
 
  public effectSidebar(){
    this.statusSidebar = ! this.statusSidebar;
    this._sidebarService.largeSidebar(this.statusSidebar);
    //console.log (this.stausSidebar)
  }
}
