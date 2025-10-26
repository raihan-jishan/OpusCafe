'use client';
import { useEffect, useState } from "react";

export default function useResponsiveSize(mobileSize = 30, desktopSize = 25) {
  const [size, setSize] = useState(desktopSize);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSize(mobileSize);
      } else {
        setSize(desktopSize);
      }
    };

    handleResize(); // প্রথমবার স্ক্রিন সাইজ চেক
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [mobileSize, desktopSize]);

  return size;
}
