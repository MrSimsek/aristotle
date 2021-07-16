import { createUseStyles } from 'react-jss';

const useAuthLayoutStyles = createUseStyles({
  authLayoutContainer: {
    position: 'relative',
    height: '100vh',
    overflowY: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: 500,
    borderRadius: 3,
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    padding: '1em',
    paddingTop: '2em',
    backgroundColor: '#fafafa',
  },
});

export default useAuthLayoutStyles;
