import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicTableComponent } from './ngx-dynamic-table.component';

describe('NgxDynamicTableComponent', () => {
  let component: NgxDynamicTableComponent;
  let fixture: ComponentFixture<NgxDynamicTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDynamicTableComponent]
    });
    fixture = TestBed.createComponent(NgxDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
