import { Component, Input } from '@angular/core'

@Component({
  selector: 'msc-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.scss'],
})
export class ListStockComponent {
  @Input() stocks: Array<Stock>
}

export interface Stock {
  title: string
  value: number
  percent: string
}
