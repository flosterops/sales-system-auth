import React, { ReactElement } from 'react';
import { colors } from 'styles/colors';
import { IPageBuilderConfig } from 'models/route';
import { PageBuilder } from 'widgets/PageBuilder';
import config from 'pages/config.json';
import { Provider } from 'react-redux';
import { prepareStore } from 'store';
import { ModalProvider } from 'widgets/Modal/provider';
import { PageWrapper } from './styles';

export const store = prepareStore();

const App = (): ReactElement => (
  <Provider store={store}>
    <ModalProvider>
      <PageWrapper bg={colors.body} componentHeight="100%">
        <PageBuilder isAuth={false} config={config as IPageBuilderConfig[]} />
      </PageWrapper>
    </ModalProvider>
  </Provider>
);

export { App };
