import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface GalleryItem {
  imageSrc?: ImageWidget;
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
      bg-linked-primary
      overflow-x-hidden
      pb-[70px] xl:pb-[120px]
      w-full
    `}>
      {title && (
        <h3
          class="not-br-mobile"
          dangerouslySetInnerHTML={{ __html: title }}
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
            w-[80vw] xl:w-[24%]
            ${index === items.length - 1 ? 'last:mr-0' : ''}
          `}
          key={index}
        >
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
              font-light leading-[140%] text-[16px] text-primary-light
            ">{item.description}</p>
          )}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Partners;
