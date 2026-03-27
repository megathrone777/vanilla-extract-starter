import React from "react";

import { Header } from "@/components";
import { themeClass } from "@/theme";

const App: React.FC = () => (
  <div className={themeClass}>
    <Header />
    <h1>App</h1>
  </div>
);

export { App };
