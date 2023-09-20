import * as paths from "./const";
import * as pages from "../pages/index";
import React from "react";

interface Routes {
  common: RoutesOption[];
}
interface RoutesOption {
  path: string;
  component: React.FunctionComponent;
  children?: {
    path: string;
    component: React.FunctionComponent;
  }[];
}

export const routes: Routes = {
  common: [
    {
      path: paths.ROUTE_ROOT,
      component: pages.AccordionPage,
    },
    {
      path: paths.ROUTE_ACCORDION,
      component: pages.AccordionPage,
    },
    {
      path: paths.ROUTE_BUTTON,
      component: pages.ButtonPage,
    },
    {
      path: paths.ROUTE_LIST,
      component: pages.ListPage,
    },
    {
      path: paths.ROUTE_CARD,
      component: pages.CardPage,
    },
    {
      path: paths.ROUTE_ICON,
      component: pages.IconPage,
    },
    {
      path: paths.ROUTE_INPUT,
      component: pages.InputPage,
    },
    {
      path: paths.ROUTE_MODAL,
      component: pages.ModalPage,
    },
    {
      path: paths.ROUTE_SELECT,
      component: pages.SelectPage,
    },
  ],
};
