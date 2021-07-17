export type SignupFormTypes = {
  region: string;
  invitationCode: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SigninFormTypes = {
  email: string;
  password: string;
};

export type ConfirmEmailFormTypes = {
  verificationCode: string;
};
