"use client";

export function UpdatedPill() {

  const pillClass =
    " inline-flex w-fit items-center rounded-[8px]  bg-(--pill)/10 px-3 py-1 text-sm text-(--sd) leading-none text-(--pill) transition-colors duration-200 hover:border-(--fg) hover:text-(--fg) focus-visible:border-(--fg) focus-visible:text-(--fg) focus-visible:outline-none";

  return (
    <div
      className={`mt-2 ${pillClass}`}
      suppressHydrationWarning
    >
      ~ Oct 14 2026
    </div>
  );
}
