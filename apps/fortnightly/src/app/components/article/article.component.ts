import { Component, Input } from '@angular/core'
import { HorizontalCard } from '../horizontal-card/horizontal-card.component'

@Component({
  selector: 'msc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: HorizontalCard
}
