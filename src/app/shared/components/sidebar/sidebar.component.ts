import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  isSubmenuVisible: boolean = false;
  isActividadSubmenuVisible: boolean = false;

  constructor(private renderer: Renderer2) {}

  toggleSubmenu(): void {
    this.isSubmenuVisible = !this.isSubmenuVisible;

    const submenu = document.querySelector(".sub-options__menu");
    if (submenu) {
      if (this.isSubmenuVisible) {
        this.renderer.addClass(submenu, "show");
      } else {
        this.renderer.removeClass(submenu, "show");
      }
    }
  }

  toggleActividadSubmenu(): void {
    this.isActividadSubmenuVisible = !this.isActividadSubmenuVisible;

    const actividadSubmenu = document.querySelector(".sub-actividad__menu");
    if (actividadSubmenu) {
      if (this.isActividadSubmenuVisible) {
        this.renderer.addClass(actividadSubmenu, "show");
      } else {
        this.renderer.removeClass(actividadSubmenu, "show");
      }
    }
  }
}
