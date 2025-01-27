import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  type?: "Large" | "Medium" | "Small";
  imageSrc?: ImageWidget;
  imageAlt?: string;
  imageTitle?: string;
}

function Hero({
  type,
  imageSrc,
  imageAlt,
  imageTitle,
}: Props) {
  return (
    imageSrc && (
      <Image
        class={`
          block
          mx-auto
          ${type === "Large" || type === "Medium" ? "w-full" : null}
          ${type === "Medium" ? "p-8" : null }
          ${type === "Small" ? "rounded-md py-8 w-[50%]" :  null }
        `}
        src={imageSrc || ""}
        alt={imageAlt || ""}
        title={imageTitle || ""}
        height={960}
        width={3026}
      />
    )
  );
}

export default Hero;
