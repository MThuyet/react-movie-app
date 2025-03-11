import { useEffect, useState } from "react";

const ImageBlur = (props) => {
  const { src, width, height, className } = props;
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setCurrentSrc(src);
    };

    // clean up function
    return () => {
      image.onload = null;
    };
  }, [src]);

  return (
    <img
      className={currentSrc === src ? className : `${className} blur-sm`}
      width={width}
      height={height}
      src={currentSrc}
      alt=""
    />
  );
};
export default ImageBlur;
