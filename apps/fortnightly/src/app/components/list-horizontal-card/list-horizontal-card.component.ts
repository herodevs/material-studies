import { Component, Input } from '@angular/core'
import { HorizontalCard } from '../horizontal-card/horizontal-card.component'

@Component({
  selector: 'msc-list-horizontal-card',
  templateUrl: './list-horizontal-card.component.html',
  styleUrls: ['./list-horizontal-card.component.scss'],
})
export class ListHorizontalCardComponent {
  @Input() cardContent: Array<HorizontalCard>
  @Input() size = 'small'
  @Input() search = false
  @Input() title: string
}
