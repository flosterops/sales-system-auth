import React, { ReactElement, useState } from 'react';
import { Title, TitleTags } from 'ui/Title';
import { EFontFamilies, FontSizeTypes, JustifyContentTypes, WeightTypes } from 'models/layout';
import { SubTitle } from 'pages/LoginPage/LoginForm/styles';
import { Form } from 'widgets/Form';
import { isRequired } from 'widgets/Form/validations';
import { initialFormValues } from 'helpers/forms';
import { FormikProps } from 'formik';
import { EInputTypes, IInitialForgotPasswordFormValues } from 'models/forms';
import { Field } from 'widgets/Form/Field';
import { EIconTypes } from 'models/icons';
import { colors } from 'styles/colors';
import { Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import { NavLink } from 'ui/NavLink';
import { Button } from 'ui/Button';
import { ERouteLinks } from 'models/route';
import { Box } from 'ui/Box';
import { resetPassword } from 'requests/reset-password';
import { ForgotPasswordFormWrapper } from './styles';

const ForgotPasswordForm = (): ReactElement => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = async (values: IInitialForgotPasswordFormValues): Promise<any> => {
    const data = await resetPassword(values.email);
    if (!data) {
      setHasError(true);
    }
    return data;
  };

  return (
    <ForgotPasswordFormWrapper hasError={hasError}>
      <Box padding="40px 40px 50px">
        <Title
          tagName={TitleTags.h2}
          fontSize={FontSizeTypes.l}
          lh="1.5"
          fontFamily={EFontFamilies.bree}
          mbottom="15px"
        >
          Request password reset
        </Title>
        <SubTitle lh="2.25" fontSize={FontSizeTypes.m} mbottom="10px">
          Enter your registered email below to receive password reset instructions.
        </SubTitle>
        <Form
          initialValues={initialFormValues.forgotPassword}
          onSubmit={() => {}}
          validations={{
            email: [isRequired()],
          }}
        >
          {(formikProps: FormikProps<IInitialForgotPasswordFormValues>): ReactElement => (
            <>
              <Field
                name="email"
                spaces={{ margin: '16px 0 0 0' }}
                type={EInputTypes.email}
                placeholder="Email address"
                icon={EIconTypes.email}
                color={colors.primary}
                label="Email address"
                value={formikProps.values.email}
              />
              <Row componentWidth="auto" mtop="20px">
                <SubTitle fontSize={FontSizeTypes.m} color={colors.black} mright="5px">
                  Remember your password?
                </SubTitle>
                <NavLink to={ERouteLinks.login} color={colors.primary}>
                  Login.
                </NavLink>
              </Row>
              <Row jc={JustifyContentTypes.flexEnd}>
                <Button
                  onClick={() => handleSubmit(formikProps.values)}
                  width="204px"
                  color={colors.primary}
                  icon={EIconTypes.rightChevron}
                >
                  <Description
                    fontSize={FontSizeTypes.xm}
                    color={colors.white}
                    weight={WeightTypes.w800}
                  >
                    Send
                  </Description>
                </Button>
              </Row>
            </>
          )}
        </Form>
      </Box>
    </ForgotPasswordFormWrapper>
  );
};

export { ForgotPasswordForm };
