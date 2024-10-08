"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./state/store";

export const Wrapper = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <Provider store={store}>{children}</Provider>;
};
