import { Component, Input, ViewEncapsulation } from '@angular/core'
import { CardContent } from '../card/card.component'

@Component({
  selector: 'msc-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GridCardComponent {
  @Input() contentCards: Array<CardContent>
  @Input() title: string
}
