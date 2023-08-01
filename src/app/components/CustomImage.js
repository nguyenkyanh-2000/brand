import Image from "next/image";

const CustomImage = ({
  src,
  alt,
  className,
  width,
  height,
  objectFit,
  priority,
}) => {
  return (
    <div
      className={{ ...(className + "relative w-full h-48 md:h-64 lg:h-96") }}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
      />
    </div>
  );
};

export default CustomImage;
