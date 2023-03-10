export function useVibrate(value: number) {
  const canIVibrate = window.navigator.vibrate; //check if this can vibrate

  if (canIVibrate!) {
    navigator.vibrate(value);
  }
}
