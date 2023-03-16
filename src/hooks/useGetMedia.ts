import { useEffect, useRef, useState } from "react";

export function useGetMedia(width: number) {
  const [toggleChange, setToggleChange] = useState<boolean>(false);

  const matchMediaRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    matchMediaRef.current = window.matchMedia(`(min-width: ${width}px)`);

    const initialMatchMedia = matchMediaRef.current.matches;

    if (initialMatchMedia) {
      setToggleChange(true);
    } else {
      setToggleChange(false);
    }

    const change = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setToggleChange(true);
      } else {
        setToggleChange(false);
      }
    };

    matchMediaRef.current.addEventListener("change", change);

    return () => {
      matchMediaRef.current?.removeEventListener("change", change);
    };
  }, [width]);

  return toggleChange;
}
