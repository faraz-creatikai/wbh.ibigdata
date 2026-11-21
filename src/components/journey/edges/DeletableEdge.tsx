import { useRef, useState } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
  type EdgeProps,
} from "@xyflow/react";
import { X } from "lucide-react";

export default function DeletableEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  style,
}: EdgeProps) {
  const { deleteElements } = useReactFlow();
  const [hovered, setHovered] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Small delay so the X doesn't flicker when the mouse moves from the line to the button.
  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setHovered(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => setHovered(false), 150);
  };

  const [path, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} />

      {/* Invisible wide line, so the hover area is easy to hit */}
      <path
        d={path}
        fill="none"
        stroke="transparent"
        strokeWidth={24}
        onMouseEnter={show}
        onMouseLeave={hide}
      />

      <EdgeLabelRenderer>
        <button
          type="button"
          title="Remove connection"
          aria-label="Remove connection"
          onClick={() => deleteElements({ edges: [{ id }] })}
          onMouseEnter={show}
          onMouseLeave={hide}
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: hovered ? "all" : "none",
            opacity: hovered ? 1 : 0,
          }}
          className="nodrag nopan flex h-5 w-5 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm transition-opacity hover:bg-rose-50"
        >
          <X size={11} />
        </button>
      </EdgeLabelRenderer>
    </>
  );
}