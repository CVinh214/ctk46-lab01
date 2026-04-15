"use client";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
  className?: string;
};

export default function ThemeToggle({
  theme,
  onToggle,
  className,
}: ThemeToggleProps) {
  const themeLabel = theme === "dark" ? "Tối" : "Sáng";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={className}
      aria-label={
        theme === "dark"
          ? "Chuyển sang giao diện sáng"
          : "Chuyển sang giao diện tối"
      }
    >
      {theme === "dark" ? (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m0 14v2m7-9h2M3 12H5m12.364 6.364 1.414 1.414M5.222 5.222l1.414 1.414m0 10.728-1.414 1.414m12.728-12.728 1.414-1.414M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      )}
      <span className="text-sm font-medium">{themeLabel}</span>
    </button>
  );
}
