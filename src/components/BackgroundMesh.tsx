'use client';

export default function BackgroundMesh() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white"
      aria-hidden="true"
    >
      {/* Top-Right Soft Purple / Magenta Glow (Matching Brooklyn sample template) */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] opacity-70 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 75% 25%, rgba(244, 114, 182, 0.35) 0%, rgba(216, 180, 254, 0.45) 35%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      {/* Bottom-Right Soft Mint / Emerald / Cyan Glow (Matching Brooklyn sample template) */}
      <div
        className="absolute -bottom-[10%] -right-[5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[110px] opacity-55 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 75% 75%, rgba(167, 243, 208, 0.45) 0%, rgba(186, 230, 253, 0.35) 35%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      {/* Subtle Mid-Left Lavender Soft Glow */}
      <div
        className="absolute top-[35%] -left-[10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full blur-[130px] opacity-35 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(233, 213, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
    </div>
  );
}
