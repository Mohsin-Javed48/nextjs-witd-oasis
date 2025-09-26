import React from "react";

type SpinnerProps = {
  /**
   * Visual size of the spinner. "default" maps to `.spinner`,
   * and "mini" maps to `.spinner-mini` defined in `app/_styles/globals.css`.
   */
  size?: "default" | "mini";
  /** Optional aria-visible label shown next to the spinner */
  label?: string;
  /** When true, centers the spinner in a larger area (good for full-page loading) */
  fullPage?: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({
  size = "default",
  label,
  fullPage = true,
}) => {
  const spinnerClassName = size === "mini" ? "spinner-mini" : "spinner";

  const spinnerMarkup = <div className={spinnerClassName} aria-hidden="true" />;

  if (fullPage) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="grid place-items-center min-h-[40vh]"
      >
        {label ? (
          <div className="flex items-center gap-3">
            {spinnerMarkup}
            <span className="text-primary-200">{label}</span>
          </div>
        ) : (
          spinnerMarkup
        )}
        <span className="sr-only">Loading</span>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="inline-flex items-center gap-3"
    >
      {spinnerMarkup}
      {label && <span className="text-primary-200">{label}</span>}
      <span className="sr-only">Loading</span>
    </div>
  );
};

export default Spinner;
