type Props = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

/** App screenshot inside a minimal device frame. */
export function PhoneShot({ src, alt, className = "", eager = false }: Props) {
  return (
    <div
      className={`relative rounded-[2.6rem] border border-white/15 bg-black/50 p-2 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        draggable={false}
        className="w-full h-auto rounded-[2.1rem] select-none"
      />
    </div>
  );
}
