import React from "react";

import { Header, LineChart } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Line = () => {

  const { currentColor } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg rounded-3xl"
      style={{ backgroundColor: currentColor }}
    >
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
