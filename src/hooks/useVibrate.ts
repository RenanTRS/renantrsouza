interface Props {
  pattern: number;
}

export function useVibrate(value: number) {
  navigator.vibrate(value);
}
