import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { SearchDialogComponent } from '../search-dialog/search-dialog.component'

@Component({
  selector: 'msc-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  search: string

  constructor(public dialog: MatDialog) {}

  openSearchBox(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      data: { search: this.search },
    })
  }
}
