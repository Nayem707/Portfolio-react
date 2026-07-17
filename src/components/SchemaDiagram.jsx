import { schema } from "../data/content.js";

/**
 * SchemaDiagram
 * The page's signature visual: an ER-diagram rendered in SVG, styled like a
 * blueprint annotation. Table layout comes from data/content.js so adding a
 * table is a data change, not a markup change.
 */
export default function SchemaDiagram() {
  return (
    <svg
      className="mt-5 block h-auto w-full"
      viewBox="0 0 460 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram of connected database tables: User, Project, and Session"
    >
      <path
        className="schema-line animate-draw"
        style={{ animationDelay: "0.15s" }}
        d="M 150 70 C 190 90, 190 130, 150 150"
      />
      <path
        className="schema-line animate-draw"
        style={{ animationDelay: "0.4s" }}
        d="M 310 150 C 270 170, 270 210, 310 230"
      />
      <path
        className="schema-line animate-draw"
        style={{ animationDelay: "0.65s" }}
        d="M 150 150 C 190 170, 230 190, 300 195"
      />

      {schema.tables.map((table) => (
        <g key={table.name}>
          <rect
            x={table.x}
            y={table.y}
            width={table.w}
            height={table.h}
            rx="2"
            fill="#132A40"
            stroke="rgba(151,187,219,0.22)"
          />
          <text
            x={table.x + 14}
            y={table.y + 22}
            className="font-mono text-[11px] font-semibold"
            fill="#EAF0F6"
          >
            {table.name}
          </text>
          <line
            x1={table.x + 14}
            y1={table.y + 30}
            x2={table.x + table.w - 14}
            y2={table.y + 30}
            stroke="rgba(151,187,219,0.2)"
          />
          {table.fields.map((field, i) => (
            <text
              key={field.text}
              x={table.x + 14}
              y={table.y + 46 + i * 14}
              className="font-mono text-[9px]"
              fill={field.pk ? "#E8A33D" : "#8FA6BD"}
            >
              {field.text}
            </text>
          ))}
        </g>
      ))}

      <text x="180" y="65" className="font-mono text-[9px]" fill="#5FD1CC">
        1 : N
      </text>
      <text x="255" y="165" className="font-mono text-[9px]" fill="#5FD1CC">
        1 : N
      </text>
    </svg>
  );
}
