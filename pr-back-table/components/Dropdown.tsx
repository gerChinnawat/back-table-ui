import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useRouter } from 'next/navigation'



const DropdownList = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'My Account',
            disabled: true,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Sign out',
            icon: <LogoutOutlined />,
            onClick: () => router.push('/')
        },
    ];
    
    return (<Dropdown 
        menu={{ items }}
        overlayStyle={{ paddingRight: '1rem' }}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space style={{ marginRight: '0.5rem' }}>
                {children}
            </Space>
        </a>
    </Dropdown>
    )
};

export default DropdownList;