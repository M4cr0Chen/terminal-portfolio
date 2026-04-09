"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface FocusOrigin {
  /** Center X in viewport px */
  x: number;
  /** Center Y in viewport px */
  y: number;
}

interface FocusContextType {
  focusedId: string | null;
  focusOrigin: FocusOrigin | null;
  /** Call with an id + the focused element's bounding rect to focus.
   *  Call with null to clear. */
  setFocus: (id: string | null, rect?: DOMRect) => void;
}

const FocusContext = createContext<FocusContextType>({
  focusedId: null,
  focusOrigin: null,
  setFocus: () => {},
});

export function FocusProvider({ children }: { children: ReactNode }) {
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [focusOrigin, setFocusOrigin] = useState<FocusOrigin | null>(null);

  const setFocus = useCallback((id: string | null, rect?: DOMRect) => {
    setFocusedId(id);
    if (id && rect) {
      setFocusOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    } else {
      setFocusOrigin(null);
    }
  }, []);

  return (
    <FocusContext.Provider value={{ focusedId, focusOrigin, setFocus }}>
      {children}
    </FocusContext.Provider>
  );
}

export function useFocus() {
  return useContext(FocusContext);
}
