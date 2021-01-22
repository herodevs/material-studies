import { Component, Input } from '@angular/core'
import { Stock } from '../list-stock/list-stock.component'

@Component({
  selector: 'msc-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  _stock

  @Input()
  set stock(stock: Stock) {
    this._stock = stock
  }
}
