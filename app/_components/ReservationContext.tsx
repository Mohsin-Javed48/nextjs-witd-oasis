"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Range {
  from: undefined | Date;
  to: undefined | Date;
}

interface ReservationContextType {
  range: Range;
  setRange: React.Dispatch<React.SetStateAction<Range>>;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

const initialState: Range = {
  from: undefined,
  to: undefined,
};

export function ReservationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [range, setRange] = useState<Range>(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error(
      "useReservation must be used within a ReservationContextProvider"
    );
  }
  return context;
}
