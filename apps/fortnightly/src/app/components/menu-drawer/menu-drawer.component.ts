import { Component } from '@angular/core'
import { ContentService } from '../../services/content.service'

@Component({
  selector: 'msc-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.scss'],
})
export class MenuDrawerComponent {
  menuItems$ = this.contentService.getTabs()

  opened = false

  constructor(private contentService: ContentService) {}

  open() {
    this.opened = true
  }

  toggleTheme() {
    document.body.classList.contains('dark-theme')
      ? document.body.classList.remove('dark-theme')
      : document.body.classList.add('dark-theme')
  }
}
