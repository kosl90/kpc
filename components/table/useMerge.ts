import {useInstance, Props} from 'intact';
import type {Table, TableRowKey, TableCheckType} from './table';
import type {TableColumnProps} from './column';
import { State, watchState } from '../../hooks/useState';
import { useReceive } from '../../hooks/useReceive';

export type TableMerge<T = any, CheckType = 'checkbox'> = (
    row: T,
    column: CheckType extends 'none' ? Props<TableColumnProps> : Props<TableColumnProps> | null,
    rowIndex: number,
    columnIndex: number
) => TableMergeConfig | undefined

export type TableMergeConfig = {
    colspan?: number
    rowspan?: number
}

export type TableGridItem = {
    render: boolean
    spans: TableMergeConfig | undefined
}

export type TableGrid = TableGridItem[][];

export function useMerge(
    getCols: () => Props<TableColumnProps>[],
    data: State<unknown[] | undefined>,
) {
    const instance = useInstance() as Table<any, TableRowKey, TableCheckType>;
    let grid: TableGrid = [];

    function handleSpans() {
        grid = [];

        const {merge, checkType} = instance.get();
        if (!data.value || !data.value.length || !merge) return;

        const cols = getCols();
        data.value.forEach((data, rowIndex) => {
            const currentRow: TableGridItem[] = [];
            grid.push(currentRow);

            let columnIndexOffset = 0;
            if (checkType !== 'none') {
                handleGridItem(currentRow, merge, data, null, rowIndex, 0); 
                columnIndexOffset = 1;
            }

            cols.forEach((props, columnIndex) => {
                handleGridItem(currentRow, merge, data, props, rowIndex, columnIndex + columnIndexOffset); 
            });
        });
    }

    function handleGridItem(
        currentRow: TableGridItem[],
        merge: TableMerge,
        data: any,
        column: Props<TableColumnProps> | null,
        rowIndex: number,
        columnIndex: number,
    ) {
        const prevCell = currentRow[columnIndex - 1];
        let tmp;
        if (prevCell && (tmp = prevCell.spans) && (tmp.colspan! > 1)) {
            currentRow.push({
                render: false,
                spans: {
                    rowspan: tmp.rowspan,
                    colspan: tmp.colspan! - 1,
                },
            });

            return;
        } 

        if (rowIndex > 0) {
            const prevRow = grid[rowIndex - 1];
            const aboveCell = prevRow[columnIndex]; 
            if (aboveCell && (tmp = aboveCell.spans) && (tmp.rowspan! > 1)) {
                currentRow.push({
                    render: false,
                    spans: {
                        rowspan: tmp.rowspan! - 1,
                        colspan: tmp.colspan
                    },
                });

                return;
            }
        }

        currentRow.push({
            render: true,
            spans: merge(data, column, rowIndex, columnIndex),
        });
    }

    function getGrid() {
        return grid;
    }

    /**
     * https://github.com/ksc-fe/kpc/issues/1008
     */
    // instance.on('$receive:children', handleSpans);
    useReceive(['children'], handleSpans);
    watchState(data, handleSpans);

    return {getGrid};
}
