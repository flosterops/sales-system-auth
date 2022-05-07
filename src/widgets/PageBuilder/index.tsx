import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ERouteLinks, ERouteTypes, IPageBuilderConfig } from 'models/route';
import { pageComponentTypes } from 'helpers/constants';
import { Modal } from 'widgets/Modal';

interface IPageBuilder {
  config: IPageBuilderConfig[];
  isAuth: boolean;
}

const PageBuilder = ({ config, isAuth }: IPageBuilder) => (
  <BrowserRouter>
    <Switch>
      {config.map((element: IPageBuilderConfig): ReactElement => {
        if (!isAuth && element.routeType === ERouteTypes.private) {
          return <Redirect key="login-redirect" to={ERouteLinks.login} />;
        }

        if (element.redirect) {
          return <Redirect key={element.id} to={element.redirect} />;
        }

        const Component = pageComponentTypes[element.componentType];
        return (
          <Route key={element.id} path={element.route}>
            <Component />
          </Route>
        );
      })}
    </Switch>
    <Modal />
  </BrowserRouter>
);

export { PageBuilder };
