export default function secondsToMs(d) {
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  return `${`0${m}`.slice(-2)}:${`0${s}`.slice(-2)}`;
}
