// Abstract, decorative routing graphic — illustrative only. It does not
// represent live or real topology data; it exists purely to convey visual
// density in the hero, matching the Stitch "live routing matrix" treatment
// without implying any specific real-time metric.
export default function NetworkGraphic({ className }: { className?: string }) {
  const nodes: [number, number][] = [
    [40, 60], [160, 30], [280, 80], [120, 150], [260, 190],
    [40, 200], [200, 240], [340, 140], [320, 40],
    [190, 120], [100, 40], [300, 220], [16, 130], [362, 190], [230, 20],
  ];
  const hub = 9;
  const edges = [
    [0, 1], [1, 2], [1, 3], [3, 5], [3, 6], [2, 7], [2, 8], [6, 4], [4, 7],
    [hub, 0], [hub, 1], [hub, 2], [hub, 3], [hub, 4], [hub, 6], [hub, 7],
    [10, 1], [11, 6], [12, 5], [13, 7], [14, 8],
  ];

  return (
    <svg
      viewBox="0 0 380 260"
      className={className}
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="rg-hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={nodes[hub][0]} cy={nodes[hub][1]} r={40} fill="url(#rg-hub-glow)" className="rg-node-pulse" />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={a === hub || b === hub ? "var(--color-gold)" : "var(--color-purple-soft)"}
          strokeOpacity={a === hub || b === hub ? 0.45 : 0.26}
          strokeDasharray={i % 4 === 0 ? "3 3" : undefined}
          strokeWidth={1.25}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === hub ? 8 : i % 3 === 0 ? 6 : 4}
          fill={i === hub ? "var(--color-gold-soft)" : i % 3 === 0 ? "var(--color-gold)" : "var(--color-purple-soft)"}
          fillOpacity={i === hub ? 1 : i % 3 === 0 ? 0.9 : 0.55}
          className="rg-float"
          style={{ animationDelay: `${(i % 5) * 0.4}s`, transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </svg>
  );
}
