"use client";

type PlayTitleBarProps = {
  title: string;
  onRequestFullscreen?: () => void;
};

export function PlayTitleBar({ title, onRequestFullscreen }: PlayTitleBarProps) {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <h1 className="text-xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      <button
        type="button"
        onClick={() => onRequestFullscreen?.()}
        aria-label="Enter fullscreen"
        className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-primary text-white shadow-md shadow-primary/30 transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M4.5 9.5V4.5H9.5" />
          <path d="M19.5 9.5V4.5H14.5" />
          <path d="M4.5 14.5V19.5H9.5" />
          <path d="M19.5 14.5V19.5H14.5" />
        </svg>
      </button>
    </div>
  );
}
