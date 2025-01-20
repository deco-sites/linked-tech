import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  imageSrc?: ImageWidget;
  imageAlt?: string;
  imageTitle?: string;
  /**
  * @description The title of name.
  * @default Click here to tweak this text however you want
  */
  title?: TextArea;
  /**
  * @format rich-text
  * @description The description of name.
  * @default Click here to tweak this text however you want
  */
  description?: TextArea;
}

function TitlePage({
  imageSrc,
  imageAlt,
  imageTitle,
  title,
  description,
}: Props) {
  return (
    <div class="
      section-title-page
      color-linked-primary
      w-full"
    >
      <div class="
        mx-auto
        relative
        px-4 py-8
        text-white
        w-full xl:w-[1460px]
      ">
        {imageSrc && (
          <Image
            class="block"
            src={imageSrc || ""}
            alt={imageAlt || ""}
            title={imageTitle || ""}
            // height={29}
            width={50}
          />
        )}

        {title && (
          <h2
            class="text-white font-normal py-2"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h2>
        )}
        
        {description && (
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        )}
      </div>
    </div>
  );
}

export default TitlePage;
