import { useState, useEffect } from 'react';

export const useLocalStorage = (
  key: string,
  defaultValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(localStorage.getItem(key) ?? defaultValue);

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
