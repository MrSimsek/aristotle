import React from 'react';

import useAuthLayoutStyles from './useAuthLayoutStyles';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;

  const classes = useAuthLayoutStyles();

  return (
    <div className={classes.authLayoutContainer}>
      <div className={classes.formContainer}>{children}</div>
    </div>
  );
}
