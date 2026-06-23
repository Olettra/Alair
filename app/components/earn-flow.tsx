import { FlowStrip, type FlowStep } from "./flow-strip";

const S = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// a small frame around a real moment — a photo / clip of an ordinary day
const StoryIcon = () => (
  <svg {...S}>
    <rect x="4" y="5.5" width="16" height="13" rx="2.2" />
    <circle cx="8.6" cy="10" r="1.4" />
    <path d="M4.6 16.5l4-3.6 3 2.4 3-2.6 4.8 4" />
  </svg>
);

// a clean checkmark — reviewed and approved
const ApprovedIcon = () => (
  <svg {...S}>
    <circle cx="12" cy="12" r="8" />
    <path d="M8.4 12.2l2.4 2.4 4.8-5" />
  </svg>
);

// a simple coin, no influencer glitz — just rewarded
const RewardIcon = () => (
  <svg {...S}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4.4" />
    <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
  </svg>
);

const STEPS: FlowStep[] = [
  { icon: <StoryIcon />, label: "share something real" },
  { icon: <ApprovedIcon />, label: "approved" },
  { icon: <RewardIcon />, label: "rewarded" },
];

// Share a real, ordinary moment → it gets approved → the money lands in your
// account. Help others see how real people live; get paid for it.
export function EarnFlow({ className = "" }: { className?: string }) {
  return <FlowStrip steps={STEPS} className={className} />;
}
