import { Fragment } from "react";

/** Renders **bold** and `code` inside content strings. */
export function RichText({ children }: { children: string }) {
  return children.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, i) => {
    if (part.startsWith("**")) {
      return (
        <strong key={i} className="font-bold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`")) {
      return (
        <code key={i} className="font-mono text-[0.9em] text-ink">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
