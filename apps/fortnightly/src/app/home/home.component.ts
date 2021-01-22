import { Component } from '@angular/core'
import { BehaviorSubject, combineLatest } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { ContentService } from '../services/content.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  category$ = new BehaviorSubject<string>(location.pathname)
  contentCards$ = this.contentService.getContentCards()
  contentSmallCards$ = this.contentService.getContentSmallCards()
  stocks$ = this.contentService.getContentStock()

  constructor(private contentService: ContentService) {}

  viewDataSmallCards$ = combineLatest([
    this.contentSmallCards$,
    this.category$,
  ]).pipe(
    map(([content, category]) => {
      category = category.startsWith('/') ? category.slice(1) : category
      return content.filter((c) =>
        category ? c.category.toLowerCase() === category.toLowerCase() : true
      )
    }),
    tap((content) => (content.length = 3))
  )
  viewDataSmallCards2$ = combineLatest([
    this.contentSmallCards$,
    this.category$,
  ]).pipe(
    map(([content, category]) => {
      category = category.startsWith('/') ? category.slice(1) : category
      return content.filter((c) =>
        category ? c.category.toLowerCase() === category.toLowerCase() : true
      )
    })
  )
  viewDataCards$ = combineLatest([this.contentCards$, this.category$]).pipe(
    map(([content, category]) => {
      category = category.startsWith('/') ? category.slice(1) : category
      return content.filter((c) =>
        category ? c.subtitle.toLowerCase() === category.toLowerCase() : true
      )
    })
  )
}
