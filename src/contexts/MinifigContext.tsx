import { createContext, useContext, useState, ReactNode } from "react";

interface IMinifigContext {
  selectedFigure: IMinifig | null;
  selectFigure: (figure: IMinifig | null) => void;
}

const MinifigContext = createContext<IMinifigContext | undefined>(undefined);

export function useMinifigContext() {
  const context = useContext(MinifigContext);
  if (!context) {
    throw new Error(
      "useMinifigContext must be used in components wrapped in MinifigProvider"
    );
  }
  return context;
}

export function MinifigContextProvider({ children }: { children: ReactNode }) {
  const [selectedFigure, setSelectedFigure] = useState<IMinifig | null>(null);

  const selectFigure = (figure: IMinifig | null) => {
    setSelectedFigure(figure);
  };

  return (
    <MinifigContext.Provider value={{ selectedFigure, selectFigure }}>
      {children}
    </MinifigContext.Provider>
  );
}
