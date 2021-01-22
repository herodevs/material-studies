import { Component, Input } from '@angular/core'

@Component({
  selector: 'msc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() content: CardContent
}

export interface CardContent {
  image: string
  imageAlt: string
  title: string
  subtitle: string
  text: string
  link: string
}
