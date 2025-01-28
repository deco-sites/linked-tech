import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import WhatsApp from "../islands/Share.tsx";

interface Props {
  enableBreadcrumb?: boolean;
  titleBreadcrumb?: string;
  enableSharePage?: boolean;

  align?: "Left" | "Center";
  imageSrc?: ImageWidget;
  imageAlt?: string;
  imageTitle?: string;
  /**
  * @description The title of name.
  * @default Click here to tweak this text however you want
  */
  title?: TextArea;
  /**
  * @description The description of name.
  * @default Click here to tweak this text however you want
  */
  description?: TextArea;
}

function TitlePage({
  enableBreadcrumb,
  titleBreadcrumb,
  enableSharePage,
  align,
  imageSrc,
  imageAlt,
  imageTitle,
  title,
  description,
}: Props) {
  return (
    <div class="
      title-page
      bg-neutrals-dark-100
      w-full"
    >
      <div class={`
        ${ align === "Center" ? "flex flex-col items-center" : null }
        mx-auto
        relative
        px-4 py-8
        text-white
        w-full xl:w-[1460px]
      `}>
        {
          enableBreadcrumb && (
            <div class="
              flex justify-between items-center
              pb-[32px]
              relative
              top-[-6px]
            ">
              <p class="text-neutrals-white-80 text-[14px] xl:text-[16px]">
                {titleBreadcrumb}
              </p>
              { enableSharePage && (<WhatsApp />) }
            </div>
          )
        }

        {imageSrc && (
          <Image
            class="
              block
              mb-[10px] xl:mb-[8px]
              h-[32px] w-[32px] xl:h-[50px] xl:w-[50px]
            "
            src={imageSrc || ""}
            alt={imageAlt || ""}
            title={imageTitle || ""}
            height={50}
            width={50}
          />
        )}

        {title && (
          <h2
            class="
              font-normal xl:font-medium
              leading-[115%]
              mb-[10px] xl:mb-[8px]
              py-2
              text-[30px] xl:text-[48px] text-neutrals-white-100
              tracking-[-0.96px]
              xl:w-[70%]
            "
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h2>
        )}
        
        {description && (
          <div
            class={`
              ${ align === "Center" ? "text-center" : null }
              font-normal xl:font-light
              leading-[130%] xl:leading-[140%]
              mb-[10px] xl:mb-[8px]
              tracking-[-0.64px];
              text-[16px] text-neutrals-white-100
            `}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default TitlePage;
