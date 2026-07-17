/**
 * RichText
 * Renders an array of plain strings and { code } segments as a single
 * paragraph, so content data can mark up inline <code> spans without the
 * component needing to know which words are technical terms.
 */
export default function RichText({ segments }) {
  return (
    <>
      {segments.map((segment, i) =>
        typeof segment === 'string' ? (
          <span key={i}>{segment}</span>
        ) : (
          <code
            key={i}
            className="rounded-sm bg-cyanAccent/10 px-1.5 py-px font-mono text-[13px] text-cyanAccent"
          >
            {segment.code}
          </code>
        )
      )}
    </>
  )
}
