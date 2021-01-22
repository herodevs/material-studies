import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ContentService } from '../services/content.service'
import { mergeMap } from 'rxjs/operators'
@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent {
  article$

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) {
    this.article$ = this.route.params.pipe(
      mergeMap((param: any) => {
        return this.contentService.getContent(param.id);
      })
    )
  }
}
