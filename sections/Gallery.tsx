import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface GalleryItem {
  title?: string;
  imageSrc?: ImageWidget;
  imageAlt?: string;
  imageTitle?: string;
  description?: string;
}

interface Props {
  /**
  * @description Selecione o template.
  */
  template?: "Content" | "Testimony" | "Images" | "Partners";
  items?: GalleryItem[];
}

function Gallery({
  template,
  items,
}: Props) {
  const templateClassMap: Record<string, string> = {
    Content: "gallery-content",
    Testmonials: "gallery-testmonials",
    Images: "gallery-images",
    Partners: "gallery-partners",
  };

  // Determina a classe baseada no templateType recebido
  const templateClass = template && templateClassMap[template] || "";

  return (
    <div class={`
      ${templateClass}
      bg-linked-primary
      overflow-x-hidden
      pb-[70px] xl:pb-[120px]
      w-full
    `}>
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
            w-[80vw] xl:w-[24%]
            ${index === items.length - 1 ? 'last:mr-0' : ''}
          `}
          key={index}
        >
          {item.title && (
            <strong class="
              block
              font-normal leading-[110%] text-[20px] text-white
              py-[24px]
            ">{item.title}</strong>
          )}

          {item.imageSrc && (
            <Image
              class="rounded-lg"
              src={item.imageSrc || ""}
              alt={item.imageAlt || ""}
              title={item.imageTitle || ""}
              // height={29}
              // width={174}
            />
          )}

          {item.description && (
            <p class="
              py-[24px]
              font-light leading-[140%] text-[16px] text-white
            ">{item.description}</p>
          )}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
