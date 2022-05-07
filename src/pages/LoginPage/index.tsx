import React, { ReactElement } from 'react';
import { Logo } from 'ui/Logo';
import { Column } from 'ui/Layout';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout';
import { LoginForm } from 'pages/LoginPage/LoginForm';

const LoginPage = (): ReactElement => (
  <Column componentHeight="100vh" ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
    <Logo componentWidth="auto" mbottom="50px" />
    <LoginForm />
  </Column>
);

export { LoginPage };
