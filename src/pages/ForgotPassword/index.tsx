import React, { ReactElement } from 'react';
import { Column } from 'ui/Layout';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout';
import { Logo } from 'ui/Logo';
import { ForgotPasswordForm } from './ForgotPasswordForm';

const ForgotPassword = (): ReactElement => (
  <Column componentHeight="100vh" ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
    <Logo componentWidth="auto" mbottom="50px" />
    <ForgotPasswordForm />
  </Column>
);

export { ForgotPassword };
