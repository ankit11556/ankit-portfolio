import { useState, useEffect } from "react";

export default function useScrollTypewriter(text: string, speed: number, trigger: boolean) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!trigger) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [trigger, text, speed]);

  return displayedText;
}
