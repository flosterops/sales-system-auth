import React, { ReactElement } from 'react';
import { Column } from 'ui/Layout';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout';
import { Logo } from 'ui/Logo';
import { ResetPasswordForm } from './ResetPasswordForm';

const ResetPassword = (): ReactElement => (
  <Column componentHeight="100vh" ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
    <Logo componentWidth="auto" mbottom="50px" />
    <ResetPasswordForm />
  </Column>
);

export { ResetPassword };
