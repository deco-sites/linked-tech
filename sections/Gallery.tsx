import { Color, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface GalleryItem {
  title?: string;
  imageSrc?: ImageWidget;
  imageHeight?: string;
  imageWidth?: string;
  imageAlt?: string;
  imageTitle?: string;
  description?: string;
  testimonyName?: string;
  testimonyLocation?: string;
}

interface Props {
  /**
  * @description Selecione o template.
  */
  template?: "Content" | "Testimony" | "Images" | "Partners";
  galleryTitle?: string;
  items?: GalleryItem[];
}

function Gallery({
  template,
  galleryTitle,
  items,
}: Props) {
  const templateClassMap: Record<string, string> = {
    Content: "gallery-content",
    Testimony: "gallery-testmonials",
    Images: "gallery-images",
    Partners: "gallery-partners",
  };

  // Determina a classe baseada no templateType recebido
  const templateClass = template && templateClassMap[template] || "";

  return (
    <div
      class={`
        ${templateClass}
        overflow-x-hidden
        pb-[70px] xl:pb-[120px]
        w-full
      `}
    >
      {galleryTitle && (
        <h2
          class="
            not-br-desktop
            font-normal
            leading-[110%]
            px-4
            py-[32px] xl:py-[64px]
            text-neutrals-dark-100
            text-[16px] xl:text-[24px]
            xl:text-center
          "
          dangerouslySetInnerHTML={{ __html: galleryTitle }}
        />
      )}

      <ul class="
        horizontal-scroll
        flex xl:justify-center
        mx-auto
        px-4 xl:px-8
        w-full xl:w-[1460px]
      ">
        {items && items.map((item, index) => (
        <li
          class={`
            border-t-2 border-neutrals-white-20
            flex-none
            mr-[12px]
            pt-[24px]
            w-[80vw] xl:w-[24%]
            ${index === items.length - 1 ? 'last:mr-0' : ''}
          `}
          key={index}
        >
          {item.title && (
            <strong class="
              block
              font-normal leading-[110%] text-[20px] text-primary-light
              pb-[24px]
            ">{item.title}</strong>
          )}

          {item.imageSrc && (
            <Image
              class="rounded-lg w-full"
              src={item.imageSrc || ""}
              alt={item.imageAlt || ""}
              title={item.imageTitle || ""}
              height={item.imageHeight || 486}
              width={item.imageWidth || 343}
            />
          )}

          {item.description && (
            <p class="
              py-[24px]
              font-light leading-[140%] text-[16px] text-primary-light
            ">{item.description}</p>
          )}
          
          {item.testimonyName && (
            <span class="
              block
              font-light
              pb-[40px]
              leading-[115%] text-[14px] text-primary-light
            ">
              {item.testimonyName} <br/>
              {item.testimonyLocation || ""}
            </span>
          )}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
