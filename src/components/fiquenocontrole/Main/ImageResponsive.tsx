import Image from "next/image";
import { useEffect, useState } from "react";

// Verifica qual a dimensão da tela
const getWindowDimensions = (): number => {
  let width: number = 0;
  if (typeof window !== "undefined") {
    width = Number(window.innerWidth);
  }
  return width;
};

// Componente que torna a imagem responsiva
const ImageResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  // Chama a função getWindowDimensions() que num primeiro momento não vai encontrar "window"
  useEffect(() => {
    const width = getWindowDimensions();
    setWindowWidth(width);
  }, []);

  // Chama novamente a função getWindowDimensions() pra receber o valor de "width" da tela
  // Toda vez que a tela for redimensionada, a função será chamada
  useEffect(() => {
    const handleResize = () => {
      const width = getWindowDimensions();
      setWindowWidth(width);
    };

    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, []);

  // Retorna os componentes de imagem
  if (windowWidth && windowWidth > 799) {
    return (
      <Image src="/images/logo-texto.svg" width={800} height={300} alt="Logo Fique no Controle" />
    );
  }
  if (windowWidth && windowWidth < 800) {
    return (
      <Image
        src="/images/logo-texto-alt.svg"
        width={650}
        height={300}
        alt="Logo Fique no Controle"
      />
    );
  }
  return null;
};

export default ImageResponsive;
