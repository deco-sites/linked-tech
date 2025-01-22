import { Color, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface GalleryItem {
  imageBg?: Color;
  imageSrc?: ImageWidget;
  imageHeight?: string;
  imageWidth?: string;
  imageAlt?: string;
  imageTitle?: string;
  description?: string;
}

interface Props {
  title?: string;
  items?: GalleryItem[];
}

function Partners({
  title,
  items,
}: Props) {
  return (
    <div class={`
      bg-primary-light
      overflow-x-hidden
      mx-auto
      pt-[70px] xl:pt-[160px]
      pb-[70px] xl:pb-[200px]
      w-full
    `}>
      <div class="
        mx-auto
        w-full xl:w-[1460px]
      ">
        {title && (
          <h3
            class="
              not-br-mobile
              font-medium
              leading-[115%]
              px-4
              text-neutrals-dark-100
              text-[28px] xl:text-[48px]
              tracking-[-0.96px]
            "
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}

        <ul class="
          horizontal-scroll
          gap-[16px] xl:gap-[20px]
          flex xl:justify-center
          mt-[48px] xl:mt-[126px]
          mx-auto
          px-4
          w-full
        ">
          {items && items.map((item, index) => (
          <li
            class={`
              border-b-2 border-neutrals-dark-20
              flex-none
              mb-[12px] xl:mb-[16px]
              w-[74vw] xl:max-w-[463px] xl:w-full
              transition-colors

              xl:hover:border-neutrals-dark-100
            `}
            key={index}
          >
            {item.imageSrc && (
              <div
                style={{ backgroundColor: item.imageBg }}
                class="
                  h-[158px] xl:h-[259px]
                  relative
                  rounded-lg
                "
              >
                <Image
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.72] xl:scale-[1]"
                  src={item.imageSrc || ""}
                  alt={item.imageAlt || ""}
                  title={item.imageTitle || ""}
                  height={item.imageHeight}
                  width={item.imageWidth}
                />
              </div>
            )}

            {item.description && (
              <p class="
                font-normal xl:font-light
                leading-[140%]
                pb-[53px] xl:pb-[67px]
                py-[24px]
                text-[16px] xl:text-[18px] text-neutrals-dark-100
              ">{item.description}</p>
            )}
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Partners;
