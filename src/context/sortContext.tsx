import { createContext, useContext, useState, ReactNode } from "react";
import { IOption } from "../components/select/Select";

interface ISortContextType {
  selectedOption: IOption
  setSelectedOption: (option: IOption) => void
}

const defaultOption = { value: 'latest', label: 'Latest' }

const SortContext = createContext<ISortContextType | null>(null);

export const SortProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState<IOption>(defaultOption);

  return (
    <SortContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SortContext.Provider>
  )
}

export const useSort = () => {
  const context = useContext(SortContext);
  if (!context) throw new Error("useSort must be used within a SortProvider");
  return context;
}