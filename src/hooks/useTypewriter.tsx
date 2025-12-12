import { useEffect, useState } from "react";

export default function useTypewriter(text: string, speed = 40) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;

    setOut("");

    const write = () => {
      setOut(text.slice(0, i));
      i++;

      if (i <= text.length) {
        setTimeout(write, speed);
      }
    };

    write();
  }, [text]);

  return out;
}
