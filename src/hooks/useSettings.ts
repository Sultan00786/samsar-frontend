import { useContext } from "react";
import {
  SettingsContext,
  type SettingsContextType,
} from "@/contexts/SettingsContext";

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export default useSettings;
