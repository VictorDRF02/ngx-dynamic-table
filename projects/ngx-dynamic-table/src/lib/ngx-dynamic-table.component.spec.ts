import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDynamicTableComponent } from './ngx-dynamic-table.component';
import { NgxDynamicTableService } from './ngx-dynamic-table.service';
import { TableOptions } from './interfaces/table-options';
import { CommonModule } from '@angular/common';

describe('NgxDynamicTableComponent', () => {
  let component: NgxDynamicTableComponent;
  let fixture: ComponentFixture<NgxDynamicTableComponent>;
  let service: NgxDynamicTableService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, NgxDynamicTableComponent], // Mueve el componente aquí
      providers: [NgxDynamicTableService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDynamicTableComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(NgxDynamicTableService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform data to TableOptions on init', () => {
    const data: string[][] = [
      ['Header1', 'Header2'],
      ['Row1Col1', 'Row1Col2'],
      ['Row2Col1', 'Row2Col2'],
    ];

    const expected: TableOptions = {
      header: [
        {
          text: 'Header1',
          bold: undefined,
          italic: undefined,
          sortable: undefined,
        },
        {
          text: 'Header2',
          bold: undefined,
          italic: undefined,
          sortable: undefined,
        },
      ],
      body: [
        [
          { text: 'Row1Col1', bold: undefined, italic: undefined },
          { text: 'Row1Col2', bold: undefined, italic: undefined },
        ],
        [
          { text: 'Row2Col1', bold: undefined, italic: undefined },
          { text: 'Row2Col2', bold: undefined, italic: undefined },
        ],
      ],
      class: 'table-hover table-bordered',
    };

    component.data = data;
    component.ngOnInit();
    expect(component.tableData).toEqual(expected);
  });

  it('should sort the table by column', () => {
    const data = {
      header: [
        { text: 'Header1', bold: true, italic: false, sortable: true },
        { text: 'Header2', bold: true, italic: false, sortable: true },
      ],
      body: [
        [
          { text: 'B', bold: false, italic: true },
          { text: 'A', bold: false, italic: true },
        ],
        [
          { text: 'A', bold: false, italic: true },
          { text: 'B', bold: false, italic: true },
        ],
      ],
      class: 'custom-class',
    };

    component.data = data;
    component.ngOnInit();
    component.sort(data.header[0]);
    expect(component.tableData.body[0][0].text).toBe('A');
    expect(component.tableData.body[1][0].text).toBe('B');
  });

  it('should handle null data', () => {
    component.data = null as any;
    component.ngOnInit();
    expect(component.tableData).toBeNull();
  });

  it('should update table data when input data changes', () => {
    const newData: string[][] = [
      ['NewHeader1', 'NewHeader2'],
      ['NewRow1Col1', 'NewRow1Col2'],
    ];
    component.data = newData;
    component.ngOnInit();
    expect(!!component.tableData.header ? component.tableData.header[0].text : '').toBe('NewHeader1');
    expect(component.tableData.body[0][0].text).toBe('NewRow1Col1');
  });

  it('should sort the table in descending order when clicked twice', () => {
    const data = {
      header: [
        { text: 'Header1', bold: true, italic: false, sortable: true },
        { text: 'Header2', bold: true, italic: false, sortable: true },
      ],
      body: [
        [
          { text: 'A', bold: false, italic: true },
          { text: 'B', bold: false, italic: true },
        ],
        [
          { text: 'B', bold: false, italic: true },
          { text: 'A', bold: false, italic: true },
        ],
      ],
      class: 'custom-class',
    };

    component.data = data;
    component.ngOnInit();
    component.sort(data.header[0]);
    component.sort(data.header[0]);
    expect(component.tableData.body[0][0].text).toBe('B');
    expect(component.tableData.body[1][0].text).toBe('A');
  });
});
