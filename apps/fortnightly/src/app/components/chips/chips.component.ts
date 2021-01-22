import { Component, Input } from '@angular/core'

@Component({
  selector: 'msc-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  @Input() chips: Array<string>
}
