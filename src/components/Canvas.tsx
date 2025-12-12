"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function CanvasBackground() {
  return (
    <Canvas
      className="fixed inset-0 -z-50 w-full h-full"
      camera={{ position: [0, 0, 1] }}
    >
      <Stars radius={100} depth={50} count={500} factor={4} fade speed={1} />
    </Canvas>
  );
}
