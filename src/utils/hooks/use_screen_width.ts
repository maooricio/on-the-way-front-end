"use client";
import { useState, useEffect } from "react";

interface IScreenSize {
  width: number,
  height: number
}

export default function useScreenSize(): IScreenSize | null {
  const [size, setSize] = useState<IScreenSize | null>(null);

  useEffect(() => {
    const handleResize = () => setSize({width: innerWidth, height: innerHeight});

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}