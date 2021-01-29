import React, { useEffect } from "react";
import { LayoutWrapper } from "./index.style";
import _ from "lodash";

const Layout = () => {
  useEffect(() => {
    console.log("Hello", _.findIndex([1, 2, 3], 2));
  }, []);
  return <LayoutWrapper>demo</LayoutWrapper>;
};

export default Layout;
