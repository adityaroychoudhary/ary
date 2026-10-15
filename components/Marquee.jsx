export default function Marquee({
  text = "Available for work & hire!",
  repeat = 4,
}) {
  const group = Array.from({ length: repeat }, (_, i) => (
    <span key={i} className="marquee-item">{text}</span>
  ));

  return (
    <div className="marquee">
      <div className="marquee-track font-mono">
        <div className="marquee-group">{group}</div>
        <div className="marquee-group" aria-hidden="true">{group}</div>
      </div>
    </div>
  );
}
