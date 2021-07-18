import React from 'react';
import {
  BarChartOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import DashboardLayout from '../../layouts/DashboardLayout';

import DashboardHomePage from '../dashboard/DashboardHomePage';

export default function DashboardPage() {
  const menuItems = [
    {
      key: 'page-1',
      title: 'Page 1',
      content: <DashboardHomePage />,
      icon: <UserOutlined />,
    },
    {
      key: 'page-2',
      title: 'Page 2',
      content: <div>Page 2</div>,
      icon: <VideoCameraOutlined />,
    },
    {
      key: 'page-3',
      title: 'Page 3',
      content: <div>Page 3</div>,
      icon: <UploadOutlined />,
    },
    {
      key: 'page-4',
      title: 'Page 4',
      content: <div>Page 4</div>,
      icon: <BarChartOutlined />,
    },
  ];

  return <DashboardLayout menuItems={menuItems} />;
}
