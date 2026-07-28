"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

// ─── Touch detection (no effect + setState; matches Navbar's mounted-flag pattern) ──

function subscribeToTouchCapability(callback: () => void) {
  const mql = window.matchMedia("(hover: none) and (pointer: coarse)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getTouchCapabilitySnapshot() {
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

function getTouchCapabilityServerSnapshot() {
  return false;
}

function useIsTouchDevice() {
  return useSyncExternalStore(
    subscribeToTouchCapability,
    getTouchCapabilitySnapshot,
    getTouchCapabilityServerSnapshot,
  );
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────

interface TechIconTooltipProps {
  label: string;
  children: ReactNode;
}

const GAP = 8;
const EDGE_MARGIN = 8;

export function TechIconTooltip({ label, children }: TechIconTooltipProps) {
  const isTouch = useIsTouchDevice();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<"top" | "bottom">("top");
  const [horizontalShift, setHorizontalShift] = useState(0);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  // Measures and opens in the same event-handler pass (no effect needed): we
  // already know the exact moment "open" is about to become true, so the
  // position can be computed right there and batched with the state update.
  function openTooltip() {
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;
    if (trigger && tooltip) {
      const triggerRect = trigger.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();

      setPlacement(triggerRect.top - tooltipRect.height - GAP > 0 ? "top" : "bottom");

      const idealLeft = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
      const clampedLeft = Math.min(
        Math.max(idealLeft, EDGE_MARGIN),
        window.innerWidth - tooltipRect.width - EDGE_MARGIN,
      );
      setHorizontalShift(clampedLeft - idealLeft);
    }
    setOpen(true);
  }

  // Touch: tapping anywhere outside the trigger closes the tooltip.
  useEffect(() => {
    if (!open || !isTouch) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (!triggerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open, isTouch]);

  return (
    <span
      ref={triggerRef}
      aria-label={label}
      aria-describedby={tooltipId}
      tabIndex={0}
      className="relative inline-flex cursor-help items-center outline-none"
      onMouseEnter={() => !isTouch && openTooltip()}
      onMouseLeave={() => !isTouch && setOpen(false)}
      onFocus={() => openTooltip()}
      onBlur={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
      onClick={() => {
        if (!isTouch) return;
        if (open) setOpen(false);
        else openTooltip();
      }}
    >
      {children}
      <span
        ref={tooltipRef}
        id={tooltipId}
        role="tooltip"
        aria-hidden={!open}
        className="pointer-events-none absolute left-1/2 z-20 whitespace-nowrap rounded-md px-2 py-1 text-[11px] font-medium"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-background)",
          boxShadow: "var(--shadow-md)",
          top: placement === "bottom" ? "100%" : undefined,
          bottom: placement === "top" ? "100%" : undefined,
          marginTop: placement === "bottom" ? `${GAP}px` : undefined,
          marginBottom: placement === "top" ? `${GAP}px` : undefined,
          opacity: open ? 1 : 0,
          transform: `translateX(calc(-50% + ${horizontalShift}px)) translateY(${
            open ? 0 : placement === "top" ? 4 : -4
          }px)`,
          transition: "opacity var(--transition-fast), transform var(--transition-fast)",
        }}
      >
        {label}
      </span>
    </span>
  );
}
