import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListHorizontalCardComponent } from './list-horizontal-card.component'

describe('ListHorizontalCardComponent', () => {
  let component: ListHorizontalCardComponent
  let fixture: ComponentFixture<ListHorizontalCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListHorizontalCardComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHorizontalCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
