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

// three little people, shoulder to shoulder
const PeopleIcon = () => (
  <svg {...S}>
    <circle cx="7" cy="8.5" r="2.1" />
    <circle cx="12" cy="7.4" r="2.1" />
    <circle cx="17" cy="8.5" r="2.1" />
    <path d="M3.6 17c.4-2 1.8-3.2 3.4-3.2S10.1 15 10.4 17" />
    <path d="M8.6 17c.4-2.2 1.9-3.5 3.4-3.5s3 1.3 3.4 3.5" />
    <path d="M13.6 17c.3-2 1.8-3.2 3.4-3.2s3 1.2 3.4 3.2" />
  </svg>
);

// a calendar with the day set
const PlanIcon = () => (
  <svg {...S}>
    <rect x="4" y="5" width="16" height="15" rx="2.4" />
    <path d="M4 9h16M8.5 3.2v3.4M15.5 3.2v3.4" />
    <path d="M9.2 14.4l1.8 1.8 3.6-3.8" />
  </svg>
);

// a coffee cup — the real-life moment
const MomentIcon = () => (
  <svg {...S}>
    <path d="M5 10h11v3.6a4.4 4.4 0 0 1-4.4 4.4H9.4A4.4 4.4 0 0 1 5 13.6V10Z" />
    <path d="M16 11h1.6a2.2 2.2 0 0 1 0 4.4H16" />
    <path d="M8 4.6c-.5.7-.5 1.5 0 2.2M11.4 4.6c-.5.7-.5 1.5 0 2.2" />
  </svg>
);

const STEPS: FlowStep[] = [
  { icon: <PeopleIcon />, label: "three people" },
  { icon: <PlanIcon />, label: "a plan" },
  { icon: <MomentIcon />, label: "in real life" },
];

// A volunteering morning, a long walk, a coffee — alik is about getting people
// off the app and into the same room.
export function CommunityScene({ className = "" }: { className?: string }) {
  return <FlowStrip steps={STEPS} className={className} />;
}
