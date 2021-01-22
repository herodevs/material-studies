import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ContentService } from '../../services/content.service'

@Component({
  selector: 'msc-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss'],
})
export class StockChartComponent implements OnInit {
  numValues = 10
  stockValues$: Observable<number[]>

  constructor(private _contentService: ContentService) {}

  ngOnInit(): void {
    this.stockValues$ = this._contentService
      .getBarChartData(this.numValues, 500)
      .pipe(map((vals) => vals.map((val) => Math.floor(val * 100))))
  }
}
