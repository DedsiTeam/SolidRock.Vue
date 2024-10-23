export interface IMenuItem {
    key: string;
    title ?: string;
    label: string;
    children?: IMenuItem[]
}

export const menuData: IMenuItem[]  = [
    {
        key: 'templateView',
        label: '模板页面',
        title: '模板页面',
        children: [
            {
                key: 'templateViewDataTable',
                label: '数据表格'
            },
            {
                key: 'templateViewDataForm',
                label: '数据表单'
            }
        ],
    }
]