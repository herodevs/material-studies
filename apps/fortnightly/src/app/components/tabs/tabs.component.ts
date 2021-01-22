import { Component, Input } from '@angular/core'

@Component({
  selector: 'msc-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() tabs: Tabs
  link: string = window.location.pathname.substr(1)

  update(link: string) {
    this.link = link
  }
}

export interface Tabs {
  title: string
  route: string
}
