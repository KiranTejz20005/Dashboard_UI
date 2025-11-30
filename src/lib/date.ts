import { parse, format, formatDistanceToNow } from "date-fns";

// Attempt to parse strings like: Tue Aug 20 2025
const INPUT_PATTERN = "EEE MMM dd yyyy";

function tryParse(raw: string): Date | null {
  try {
    return parse(raw, INPUT_PATTERN, new Date());
  } catch {
    return null;
  }
}

export function formatShort(raw: string): string {
  const d = tryParse(raw);
  return d ? format(d, "MMM dd, yyyy") : raw;
}

export function formatFull(raw: string): string {
  const d = tryParse(raw);
  return d ? format(d, "EEEE, MMMM dd yyyy") : raw;
}

export function formatRelative(raw: string): string {
  const d = tryParse(raw);
  return d ? formatDistanceToNow(d, { addSuffix: true }) : raw;
}

export function normalizeRange(raw: string): string {
  return raw
    .replace(/\s*–\s*/g, "–")
    .replace(/\s+-\s+/g, "–")
    .replace(/\s{2,}/g, " ");
}

export type DateDisplayMode = "short" | "full" | "relative";

export function formatByMode(raw: string, mode: DateDisplayMode): string {
  switch (mode) {
    case "full":
      return formatFull(raw);
    case "relative":
      return formatRelative(raw);
    case "short":
    default:
      return formatShort(raw);
  }
}
