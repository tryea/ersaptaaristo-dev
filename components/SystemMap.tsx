// Signature visual: AI-integration system map. A central hub wired to the stack,
// with amber pulses flowing along each connection (data moving through the integration).
const HUB = { x: 240, y: 192 };
const NODES = [
  { id: "next", label: "Next.js", x: 118, y: 86, below: false },
  { id: "openai", label: "OpenAI", x: 362, y: 86, below: false },
  { id: "vision", label: "Vision", x: 64, y: 192, below: false },
  { id: "rag", label: "RAG", x: 416, y: 192, below: false },
  { id: "supabase", label: "Supabase", x: 118, y: 298, below: true },
  { id: "n8n", label: "n8n", x: 362, y: 298, below: true },
];

export default function SystemMap() {
  return (
    <svg viewBox="0 0 480 384" className="h-full w-full" role="img" aria-label="AI integration system map">
      {NODES.map((n, i) => {
        const d = `M${HUB.x} ${HUB.y} L${n.x} ${n.y}`;
        return (
          <g key={n.id}>
            <path d={d} className="base-line" />
            <path d={d} className="flow-line" style={{ animationDelay: `${i * 0.55}s` }} />
          </g>
        );
      })}

      {/* hub */}
      <circle cx={HUB.x} cy={HUB.y} r="30" className="node-hub" />
      <text
        x={HUB.x}
        y={HUB.y + 4}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="13"
        fontWeight="600"
        fill="var(--color-accent)"
      >
        AI
      </text>

      {/* satellites */}
      {NODES.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="5" className="node-dot" />
          <text
            x={n.x}
            y={n.below ? n.y + 20 : n.y - 13}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--color-ink-2)"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
