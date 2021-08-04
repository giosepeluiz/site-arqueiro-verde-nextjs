import Image from "next/image";
import { useEffect, useState } from "react";

const ImageResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        setWindowSize({
          width: window.innerWidth,
        });
      });
      window.addEventListener("resize", () => {
        setWindowSize({
          width: window.innerWidth,
        });
      });
    }
  }, []);

  if (windowSize.width === null) {
    return <Image src="/images/empty.png" width={650} height={300} alt="Logo Fique no Controle" />;
  }

  if (Number(windowSize.width) > 799) {
    return (
      <Image src="/images/logo-texto.svg" width={800} height={300} alt="Logo Fique no Controle" />
    );
  }

  if (Number(windowSize.width) < 800) {
    return (
      <Image
        src="/images/logo-texto-alt.svg"
        width={650}
        height={300}
        alt="Logo Fique no Controle"
      />
    );
  }
};

export default ImageResponsive;
