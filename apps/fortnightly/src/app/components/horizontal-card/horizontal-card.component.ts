import { Component, Input } from '@angular/core'
import { CardContent } from '../card/card.component'

@Component({
  selector: 'msc-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss'],
})
export class HorizontalCardComponent {
  @Input() content: HorizontalCard
  @Input() size = 'small'
  @Input() search = false
}

export interface HorizontalCard {
  link: string
  image: string
  category: string
  title: string
  views?: string
  subtitle?: string
  content: string
  author: string
  related?: Array<CardContent>
  chips?: Array<string>
}
