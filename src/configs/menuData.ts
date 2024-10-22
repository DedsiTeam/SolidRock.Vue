export interface IMenuItem {
    key: string;
    title ?: string;
    label: string;
    children?: IMenuItem[]
}

export const menuData: IMenuItem[]  = [
    {
        key: 'sub1',
        label: 'Navigation One',
        title: 'Navigation One',
        children: [
            {
                key: 'Item 1',
                label: 'Item 1',
                children: [
                    {
                        key: 'setting:1',
                        label: 'Option 1'
                    },
                ],
            }
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Three',
        title: 'Navigation Three',
        children: [
            {
                key: 'Item 12',
                label: 'Item 12',
                children: [
                    {
                        key: 'setting:123',
                        label: 'Option 123'
                    },
                ],
            }
        ],
    },
]