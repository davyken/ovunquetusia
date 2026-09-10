import type { ServiceItem } from "@/lib/business";

const paths: Record<ServiceItem["icon"], React.ReactNode> = {
  bandage: (
    <>
      <rect x="3" y="10" width="18" height="4" rx="2" transform="rotate(-30 12 12)" />
      <path d="M8 8l8 8" strokeDasharray="1.5 2" />
    </>
  ),
  syringe: (
    <>
      <path d="M4 20l4-4" />
      <path d="M7 17l6-6 2 2-6 6z" />
      <path d="M14 10l3-3" />
      <path d="M17 4l3 3-2 2-3-3z" />
    </>
  ),
  vitals: <path d="M2 12h4l2-7 4 14 2-7 2 3h6" />,
  recovery: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  elderly: (
    <path d="M12 21s-7-4.4-9.5-8.6C.8 8.7 3 5 6.6 5 9 5 11 7 12 8.6 13 7 15 5 17.4 5 21 5 23.2 8.7 21.5 12.4 19 16.6 12 21 12 21z" />
  ),
  education: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  catheter: (
    <>
      <circle cx="7" cy="7" r="3" />
      <path d="M9.5 9.5L18 18" />
      <path d="M14 14l4 4" />
    </>
  ),
  plan: (
    <>
      <path d="M5 4h14v16H5z" />
      <path d="M9 2v4M15 2v4M5 10h14" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: ServiceItem["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="26"
      height="26"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
