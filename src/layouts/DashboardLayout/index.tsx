import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import classNames from 'classnames';
import {
  BarChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import useDashboardLayoutStyles from './useDashboardLayoutStyles';

const { Header, Content, Sider } = Layout;

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const classes = useDashboardLayoutStyles();

  const toggle = () => setCollapsed(!collapsed);

  return (
    <Layout className={classes.dashboardLayoutContainer}>
      <Sider
        className={classes.sider}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className={classes.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav 4
          </Menu.Item>
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
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
