import { useEffect, useRef, useState } from "react";

type MediaProps =
  | "small-screen"
  | "mobile-sm"
  | "mobile"
  | "tablet"
  | "tablet-lg"
  | "desktop"
  | "desktop-lg";

const sizesOfScreen = [
  {
    name: "small-screen",
    size: 282
  },
  {
    name: "mobile-sm",
    size: 283
  },
  {
    name: "mobile",
    size: 640
  },
  {
    name: "tablet",
    size: 768
  },
  {
    name: "tablet-lg",
    size: 1024
  },
  {
    name: "desktop",
    size: 1280
  },
  {
    name: "desktop-lg",
    size: 1536
  }
];

export function useGetMedia(width: MediaProps = "small-screen") {
  const size = sizesOfScreen.find((index) => index.name === width);

  const [toggleChange, setToggleChange] = useState<boolean>(false);

  const matchMediaRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    if (width === "small-screen") {
      matchMediaRef.current = window.matchMedia(`(max-width: ${size?.size}px)`);
    } else {
      matchMediaRef.current = window.matchMedia(`(min-width: ${size?.size}px)`);
    }

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
