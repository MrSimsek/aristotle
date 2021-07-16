import React from 'react';

import styles from './authLayout.styles.css';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;

  return (
    <div className={styles.authLayoutContainer}>
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
}
