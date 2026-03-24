import { useEffect, useRef } from "react";

const SCHEDULING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0rQ2JLPnfHtutKeUScHA7zCTvaop16jDRzgBD3LDmzCzVbWZy5hsClHuRh5JhLogWx2ScWyC3e?gv=true";
const SCRIPT_SRC =
  "https://calendar.google.com/calendar/scheduling-button-script.js";

interface GoogleSchedulingButtonProps {
  label?: string;
  color?: string;
}

let scriptLoaded = false;
let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (scriptLoaded) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      scriptLoaded = true;
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export default function GoogleSchedulingButton({
  label = "Book a Demo",
  color = "#2563EB",
}: GoogleSchedulingButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    loadScript().then(() => {
      if (containerRef.current && (window as any).calendar) {
        (window as any).calendar.schedulingButton.load({
          url: SCHEDULING_URL,
          color,
          label,
          target: containerRef.current,
        });
      }
    });
  }, [label, color]);

  return <div ref={containerRef} />;
}
