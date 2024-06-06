// crud.d.ts
import { RowID, RowElement } from './interface';

declare module 'crud' {
    function insertRow(row: RowElement): RowID;
    function deleteRow(rowId: RowID): void;
    function updateRow(rowId: RowID, row: RowElement): RowID;
}
