import { createUseStyles } from 'react-jss';

const useDashboardLayoutStyles = createUseStyles({
  dashboardLayoutContainer: {
    height: '100vh',
  },
  logo: {
    height: 32,
    margin: 16,
    background: 'rgba(255, 255, 255, 0.3)',
  },
  trigger: {
    padding: '0 24px',
    fontSize: 18,
    cursor: 'pointer',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#1890ff',
    },
  },
  dashboardLayoutBackground: {
    background: '#fff',
  },
  contentContainer: {
    overflowY: 'auto',
  },
  content: {
    margin: '24px 16px',
    padding: 24,
    textAlign: 'center',
  },
  header: {
    padding: 0,
  },
  sider: {
    height: '100%',
  },
});

export default useDashboardLayoutStyles;
