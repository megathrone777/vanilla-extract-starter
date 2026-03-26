import React from "react";

import { DeviceScan } from "~/components";
import { themeClass } from "~/theme";

const App: React.FC = () => (
  <div className={themeClass}>
    <DeviceScan />
  </div>
);

export { App };
