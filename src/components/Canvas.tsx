import { useScale } from "../hooks/useScale";

export function Canvas ({ children }: { children: React.ReactNode }) {
  const { scale } = useScale();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${(1 / scale) * 100}vw`,
        height: `${(1 / scale) * 100}vh`,
      }}
    >
      {children}
    </div>
  );
}