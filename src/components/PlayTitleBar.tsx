"use client";

type PlayTitleBarProps = {
  title: string;
};

export function PlayTitleBar({ title }: PlayTitleBarProps) {
  const handleFullscreen = () => {
    window.dispatchEvent(new Event('playframe-fullscreen'));
  };

  return (
    <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <h1 className="text-xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      <button
        type="button"
        onClick={handleFullscreen}
        aria-label="Enter fullscreen"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl text-white transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        ⛶
      </button>
    </div>
  );
}
