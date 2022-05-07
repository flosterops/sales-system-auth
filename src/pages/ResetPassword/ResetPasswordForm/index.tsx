import React, { ReactElement, useState } from 'react';
import { Title, TitleTags } from 'ui/Title';
import { EFontFamilies, FontSizeTypes, JustifyContentTypes, WeightTypes } from 'models/layout';
import { SubTitle } from 'pages/LoginPage/LoginForm/styles';
import { Form } from 'widgets/Form';
import {
  isRequired,
  repeatPassword,
  allowUppercase,
  moreThan,
  onlyTenDigits,
} from 'widgets/Form/validations';
import { initialFormValues } from 'helpers/forms';
import { FormikProps } from 'formik';
import { EInputTypes, IInitialResetPasswordFormValues } from 'models/forms';
import { Field } from 'widgets/Form/Field';
import { EIconTypes } from 'models/icons';
import { colors } from 'styles/colors';
import { Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import { Button } from 'ui/Button';
import { Box } from 'ui/Box';
import { ResetPasswordFormWrapper } from './styles';

const ResetPasswordForm = (): ReactElement => {
  const [hasError, setHasError] = useState<boolean>(false);
  return (
    <ResetPasswordFormWrapper hasError={hasError}>
      <Box padding="40px 40px 50px">
        <Title
          tagName={TitleTags.h2}
          fontSize={FontSizeTypes.l}
          lh="1.5"
          fontFamily={EFontFamilies.bree}
          mbottom="15px"
        >
          Set up new password
        </Title>
        <SubTitle lh="2.25" fontSize={FontSizeTypes.m} mbottom="10px">
          Please create a secure password. The password must consist of at least 8 symbols,
          contain one uppercase letter and at least one number.
        </SubTitle>
        <Form
          initialValues={initialFormValues.forgotPassword}
          onSubmit={() => {}}
          validations={{
            password: [isRequired(), moreThan(8), allowUppercase(), onlyTenDigits()],
            confirmPassword: [isRequired(), moreThan(8), allowUppercase(), repeatPassword()],
          }}
        >
          {(formikProps: FormikProps<IInitialResetPasswordFormValues>): ReactElement => (
            <>
              <Field
                name="password"
                spaces={{ margin: '16px 0 0 0' }}
                type={EInputTypes.password}
                placeholder="New password"
                icon={EIconTypes.password}
                color={colors.primary}
                label="Password"
                value={formikProps.values.password}
              />
              <Field
                name="confirmPassword"
                spaces={{ margin: '30px 0 0 0' }}
                type={EInputTypes.password}
                placeholder="Confirm new password"
                icon={EIconTypes.password}
                color={colors.primary}
                label="New password"
                value={formikProps.values.confirmPassword}
              />
              <Row jc={JustifyContentTypes.flexEnd} mtop="40px">
                <Button
                  onClick={() => setHasError(!hasError)}
                  width="204px"
                  color={colors.primary}
                  icon={EIconTypes.check}
                >
                  <Description
                    fontSize={FontSizeTypes.xm}
                    color={colors.white}
                    weight={WeightTypes.w800}
                  >
                    Save
                  </Description>
                </Button>
              </Row>
            </>
          )}
        </Form>
      </Box>
    </ResetPasswordFormWrapper>
  );
};

export { ResetPasswordForm };
