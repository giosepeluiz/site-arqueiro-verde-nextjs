import Image from "next/image";
import { useEffect, useState } from "react";

const ImageResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    }
  }, []);

  if (Number(windowSize.width) > 799) {
    return (
      <Image src="/images/logo-texto.svg" width={800} height={300} alt="Logo Fique no Controle" />
    );
  }
  return (
    <Image src="/images/logo-texto-alt.svg" width={650} height={300} alt="Logo Fique no Controle" />
  );
};

export default ImageResponsive;
