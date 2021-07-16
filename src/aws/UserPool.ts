import {
  CognitoUserPool,
  ICognitoUserPoolData,
} from 'amazon-cognito-identity-js';

import { AWS_CLIENT_ID, AWS_USER_POOL_ID } from '../config/env-variables';

const poolData: ICognitoUserPoolData = {
  UserPoolId: AWS_USER_POOL_ID || '',
  ClientId: AWS_CLIENT_ID || '',
};

const UserPool = new CognitoUserPool(poolData);

export default UserPool;
