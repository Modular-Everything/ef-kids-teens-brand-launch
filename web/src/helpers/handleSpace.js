export default function handleSpace(spacing) {
  const topPad = spacing[0];
  const bottomPad = spacing[1];

  if (topPad + bottomPad === 0) return null;

  window.addEventListener('resize', () => {
    console.log('resized');
  });

  return { paddingTop: `${spacing[0]}px`, paddingBottom: `${spacing[1]}px` };
}
