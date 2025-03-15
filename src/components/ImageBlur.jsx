import { useEffect, useState } from "react";

const ImageBlur = (props) => {
  const { src, width, height, className } = props;
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const image = new Image();
    if (src) {
      image.src = src;
      image.onload = () => {
        setCurrentSrc(src);
      };
      return;
    }

    setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image`);

    // clean up function
    return () => {
      image.onload = null;
    };
  }, [src, width, height]);

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
