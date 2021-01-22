import { Injectable } from '@angular/core'
import { tap } from 'rxjs/operators'
import { ContentService } from './content.service'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private contentService: ContentService) {}

  get(title: string) {
    return this.contentService.getContentSmallCards().pipe(
      tap((results) => {
        return results.filter((d: any) => d.title.includes(title))
      })
    )
  }
}
