export default function NetworkGraphic({ className }: { className?: string }) {
  const nodes = [
    [40, 60], [160, 30], [280, 80], [120, 150], [260, 190],
    [40, 200], [200, 240], [340, 140], [320, 40],
  ];
  const edges = [
    [0, 1], [1, 2], [1, 3], [3, 5], [3, 6], [2, 7], [2, 8], [6, 4], [4, 7],
  ];

  return (
    <svg
      viewBox="0 0 380 260"
      className={className}
      aria-hidden
      style={{ overflow: "visible" }}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--color-purple-soft)"
          strokeOpacity={0.35}
          strokeWidth={1.25}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 6 : 4}
          fill={i % 3 === 0 ? "var(--color-gold)" : "var(--color-purple-soft)"}
          fillOpacity={i % 3 === 0 ? 0.9 : 0.55}
          className="rg-float"
          style={{ animationDelay: `${(i % 5) * 0.4}s`, transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </svg>
  );
}
