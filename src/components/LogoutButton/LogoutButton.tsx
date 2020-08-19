import React, { FC } from 'react';
import { Menu } from 'antd';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import { useHistory } from 'react-router-dom';
import { logout } from '../../utils/logout';

const LogoutButton: FC = () => {
  const history = useHistory();

  return (
    <Menu mode="inline" theme="dark" onClick={() => logout(history)}>
      <Menu.Item icon={<LogoutOutlined />}>Выход</Menu.Item>
    </Menu>
  );
};

export default LogoutButton;
