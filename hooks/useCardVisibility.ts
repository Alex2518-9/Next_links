import { useState } from "react";

const useCardSelection = () => {
  const [selected, setSelected] = useState(false);

  return {
    selected,
    setSelected: () => setSelected(true),
    setNoneSelected: () => setSelected(false),
  };
};

export { useCardSelection };