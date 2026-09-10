const outline = new Set(["instagram"]);

const paths: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5h1.6V4.2C16.3 4.1 15.3 4 14.1 4c-2.4 0-4.1 1.5-4.1 4.2v2.2H7.4v3H10V21h3.5z" />
  ),
  twitter: (
    <path d="M20 6.6c-.6.3-1.3.5-2 .6.7-.4 1.3-1.2 1.5-2-.7.4-1.4.7-2.2.9A3.5 3.5 0 0 0 11.2 9c0 .3 0 .5.1.8-2.9-.2-5.5-1.5-7.3-3.7-.3.5-.5 1.1-.5 1.8 0 1.2.6 2.2 1.5 2.9-.5 0-1-.2-1.5-.4v.1c0 1.6 1.2 3 2.7 3.3-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.7 2.3 3.2 2.4A7 7 0 0 1 3 17.7 9.9 9.9 0 0 0 8.3 19.3c6.4 0 9.9-5.3 9.9-9.9v-.5c.7-.5 1.3-1.1 1.8-1.8z" />
  ),
};

export function SocialIcon({ name }: { name: string }) {
  const isOutline = outline.has(name);

  return (
    <svg
      viewBox="0 0 24 24"
      fill={isOutline ? "none" : "currentColor"}
      stroke={isOutline ? "currentColor" : "none"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
