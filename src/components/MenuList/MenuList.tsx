import React, {FC, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {PieChartOutlined} from '@ant-design/icons';
import menuList from './menuList.json';
import LogoutButton from '../LogoutButton/LogoutButton';

const MenuList: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onCollapse = () => {
    setCollapsed(prevCollapsed => !prevCollapsed);
  };
  const { Sider } = Layout;

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menuList.map(item => (
          <Menu.Item key={item.page} icon={<PieChartOutlined />}>
            <NavLink to={item.path}>{item.page}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
      <LogoutButton/>
    </Sider>
  );
};

export default MenuList;
