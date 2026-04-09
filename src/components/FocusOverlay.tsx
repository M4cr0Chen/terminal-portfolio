"use client";

import { useFocus } from "@/context/FocusContext";

/**
 * Full-screen overlay that blurs & darkens everything behind it when
 * a component is focused.  The focused component must use a z-index
 * above 20 (the overlay's z-index) to stay sharp and unaffected.
 *
 * A radial vignette is centered on the focused element so the area
 * immediately around it stays slightly brighter — simulating the
 * human eye's focal-point concentration.
 */
export default function FocusOverlay() {
  const { focusedId, focusOrigin } = useFocus();
  const active = focusedId !== null;

  // Vignette: lighter circle at focus origin, darker edges
  const vignette = focusOrigin
    ? `radial-gradient(600px circle at ${focusOrigin.x}px ${focusOrigin.y}px, rgba(0,0,0,0.25), rgba(0,0,0,0.6))`
    : "rgba(0,0,0,0.5)";

  return (
    <div
      className="fixed inset-0 transition-all duration-500 ease-out"
      style={{
        opacity: active ? 1 : 0,
        pointerEvents: active ? "none" : "none",
        background: vignette,
        backdropFilter: active ? "blur(4px)" : "blur(0px)",
        WebkitBackdropFilter: active ? "blur(4px)" : "blur(0px)",
        zIndex: 45,
      }}
    />
  );
}
