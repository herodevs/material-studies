import { Component } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ContentService } from './services/content.service'
import { fadeAnimation } from './animation'

@Component({
  selector: 'msc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  skipLinkHidden = true

  category$ = new BehaviorSubject<string>(location.pathname)
  tabs$ = this.contentService.getTabs()

  constructor(private contentService: ContentService) {}

  changeData(param: string) {
    this.category$.next(param)
  }
}
