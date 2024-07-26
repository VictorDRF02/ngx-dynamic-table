import { CellHeaderOptions, CellOptions } from './cell-options';

export interface TableOptions {
  /** Table header content */
  header?: CellHeaderOptions[];
  /** Table body content */
  body: CellOptions[][];
  /** Table footer contents. These elements are not affected by sort. */
  footer?: CellOptions[][];
  /** Custom class for the table */
  class?: string;
}
