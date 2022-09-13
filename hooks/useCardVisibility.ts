import { useState } from "react";

const useCardVisibility = () => {
  const [visible, setVisible] = useState(false);

  return {
    visible,
    setVisible: () => setVisible(true),
    setInvisible: () => setVisible(false),
  };
};

export { useCardVisibility };