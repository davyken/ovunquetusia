import Image from "next/image";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, flexShrink: 0 }}
      priority
    />
  );
}
