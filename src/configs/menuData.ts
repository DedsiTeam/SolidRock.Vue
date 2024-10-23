export interface IMenuItem {
    key: string;
    title ?: string;
    label: string;
    authorityCode: string;
    children?: IMenuItem[]
}

export const menuData: IMenuItem[]  = [
    {
        key: 'templateView',
        authorityCode: 'templateView',
        label: '模板页面',
        title: '模板页面',
        children: [
            {
                key: 'templateViewDataTable',
                authorityCode: 'templateViewDataTable',
                label: '数据表格'
            },
            {
                key: 'templateViewDataForm',
                authorityCode: 'templateViewDataForm',
                label: '数据表单'
            }
        ],
    }
]