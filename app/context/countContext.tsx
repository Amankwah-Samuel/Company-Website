"use client";

import { createContext, useState } from "react";

export const CountContext = createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

export function CountProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number>(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
