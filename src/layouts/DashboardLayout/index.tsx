import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import classNames from 'classnames';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import useDashboardLayoutStyles from './useDashboardLayoutStyles';

import { MenuItemTypes } from '../../types/dashboard';

const { Header, Content, Sider } = Layout;

type DashboardLayoutProps = {
  menuItems: MenuItemTypes[];
};

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { menuItems } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([
    menuItems[0].key,
  ]);

  const classes = useDashboardLayoutStyles();

  const toggle = () => setCollapsed(!collapsed);

  const handleNavigation = (key: string) => {
    setSelectedKeys([key]);
  };

  return (
    <Layout className={classes.dashboardLayoutContainer}>
      <Sider
        className={classes.sider}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className={classes.logo} />
        <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              onClick={({ key }) => handleNavigation(key)}
              icon={item.icon}
            >
              {item.title}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className={classNames(
            classes.dashboardLayoutBackground,
            classes.header
          )}
        >
          {collapsed ? (
            <MenuUnfoldOutlined className={classes.trigger} onClick={toggle} />
          ) : (
            <MenuFoldOutlined className={classes.trigger} onClick={toggle} />
          )}
        </Header>
        <Content className={classes.contentContainer}>
          <div
            className={classNames(
              classes.dashboardLayoutBackground,
              classes.content
            )}
          >
            {menuItems.find((item) => item.key === selectedKeys[0])?.content}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
