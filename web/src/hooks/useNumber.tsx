import { useState } from 'react';

export default function useNumber(initialNumber: number) {
  const [value, setValue] = useState(initialNumber);

  function incrementValue(by = 1) {
    setValue((prev) => prev + by);
  }

  function decrementValue(by = 1) {
    setValue((prev) => prev - by);
  }

  return {
    value,
    increment: incrementValue,
    decrement: decrementValue,
    zero: () => {
      setValue(0);
    },
  };
}
