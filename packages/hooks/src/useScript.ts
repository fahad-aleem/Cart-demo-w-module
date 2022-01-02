import { useEffect, useState } from "react";

export type Status = "idle" | "loading" | "ready" | "error" | "failed";
export type ScriptElt = HTMLScriptElement | null;

/**
 * Dynamically load an external script in one line with this React hook.
 * This can be useful to integrate a third party library like Google Analytics or Stripe.
 * This avoids loading this script in the <head> </head> on all your pages if it is not necessary.
 *
 * https://usehooks-typescript.com/react-hook/use-script
 */
export const useScript = (srcToLoad: string, maxRetry = 3): Status => {
  const [src, setSrc] = useState(srcToLoad);
  const [status, setStatus] = useState<Status>(src ? "loading" : "idle");
  const [retry, setRetry] = useState(maxRetry);

  useEffect(
    () => {
      if (!src) {
        setStatus("idle");

        return;
      }

      // Fetch existing script element by src
      // It may have been added by another instance of this hook
      let script: ScriptElt = document.querySelector(`script[src="${src}"]`);

      if (!script) {
        // Create script
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        // Add script to document body
        document.body.appendChild(script);
        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event: Event) => {
          if (event.type !== "load") {
            script.removeEventListener("load", setAttributeFromEvent);
            script.removeEventListener("error", setAttributeFromEvent);
            script.remove();
          }

          script?.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };

        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute("data-status") as Status);
      }
      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event: Event) => {
        if (event.type !== "load") {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
          script.remove();
        }

        setStatus(event.type === "load" ? "ready" : "error");
      };
      // Add event listeners

      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [src] // Only re-run effect if script src changes
  );

  useEffect(() => {
    if (status === "error" && retry) {
      setSrc(null);
      setRetry(retry - 1);
      setStatus(retry ? "loading" : "idle");

      setTimeout(() => {
        setSrc(srcToLoad);
      }, 1000);
    } else if (status === "error" && !retry) {
      setStatus("failed");
    }
  }, [srcToLoad, retry, status]);

  return status;
};
