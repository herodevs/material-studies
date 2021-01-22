import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SearchService } from '../../services/search.service'
import { Observable } from 'rxjs'
@Component({
  selector: 'msc-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
})
export class SearchDialogComponent {
  data$: Observable<any>

  constructor(
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { search: string },
    private searchService: SearchService
  ) {}

  search() {
    this.data$ = this.searchService.get(this.data.search)
  }

  onNoClick(): void {
    this.dialogRef.close()
  }
}
