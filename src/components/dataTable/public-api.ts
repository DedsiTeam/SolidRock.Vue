import { SizeType } from 'ant-design-vue/lib/config-provider'
import { TableProps } from 'ant-design-vue/lib/table/Table'
import {  ColumnsType, ColumnGroupType, ColumnType, TablePaginationConfig } from 'ant-design-vue/lib/table/interface'

import { DefaultRecordType } from 'ant-design-vue/lib/vc-table/interface'

export class DataTableConfig<RecordType = DefaultRecordType> implements TableProps<RecordType> {
    rowId = 'id';
    bordered = true;
    size: SizeType = 'middle';
    pagination = new TableConfigPagination();
    scroll?: TableProps<RecordType>['scroll'] = undefined;
    columns: ColumnsType<RecordType> = [
        { title: '序号', dataIndex: 'noIndex', key: 'noIndex', width: 50, align: 'center', fixed: 'left' },
        { title: '操作', key: 'action', width: 240, fixed: 'right' },
    ];
    dataSource: any[] = [];

    // ColumnsType is Array
    addColumns(items: ColumnsType<RecordType>){
        this.columns.splice(1, 0, ...items);
    }

    // ColumnsType is Array
    addColumnsByIndex(index: number,items: ColumnsType<RecordType>){
        this.columns.splice(index, 0, ...items);
    }

    // 添加单个列
    addColumn(item: ColumnGroupType<RecordType> | ColumnType<RecordType>){
        this.columns.splice(1, 0, item);
    }

    // 添加单个列
    addColumnByIndex(index: number,item: ColumnGroupType<RecordType> | ColumnType<RecordType>){
        this.columns.splice(index, 0, item);
    }

    // 设置操作列
    setActionColumn(actionColumn: ColumnGroupType<RecordType> | ColumnType<RecordType>){
        this.columns.splice(this.columns.length -1, 1, actionColumn);
    }

    // set dataSource
    setDataSource(dataSource: any[]) {
        this.dataSource = dataSource;
    }

    // 滚动条
    setScroll(scroll: TableProps<RecordType>['scroll']) {
        this.scroll = scroll;
    }
}

export type TablePaginationPosition = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';

export class TableConfigPagination implements TablePaginationConfig {
    defaultPageSize= 10;
    position: TablePaginationPosition[] = ['bottomCenter']

    total = 0;
    current = 1;
    pageSize = this.defaultPageSize;

    size: TablePaginationConfig['size']  = 'default';
    hideOnSinglePage = true;

    // 上一次的分页数量
    lastPageSize= this.defaultPageSize;

    setDefaultPageSize() {
        this.current = 1;
        this.pageSize = this.defaultPageSize;
    }

    // 判断：每页数量是否和上一次的一样
    setLastPageSize(newCurrent:number, newPageSize: number) {
        this.current = newPageSize !== this.lastPageSize ? 1 : newCurrent;
        this.pageSize = newPageSize;
    }
}