import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  imageSrc?: ImageWidget;
  imageAlt?: string;
  imageTitle?: string;
  copyright?: string;
  address?: string;
}

function Footer({
  imageSrc,
  imageAlt,
  imageTitle,
  copyright,
  address,
}: Props) {
  return (
    <div class="
      bg-linked-primary
      border-t border-neutrals-white-20
      w-full
    ">
      <div class="
        mx-auto
        w-full
        pt-24
        pb-12
      ">
        {imageSrc && (
          <Image
            class="block mx-auto w-[195px] xl:w-[253px]"
            src={imageSrc || ""}
            alt={imageAlt || ""}
            title={imageTitle || ""}
            height={51}
            width={253}
          />
        )}
        <span class="border-b border-neutrals-white-20 block text-center text-white text-[11px] xl:text-[12px] pt-4 pb-12 font-secondary">{copyright}</span>
        <address class="block text-center text-white not-italic text-[11px] xl:text-[12px] pt-8 w-[284px] xl:w-full mx-auto font-secondary">
          {address || ""}
        </address>
      </div>
    </div>
  );
}

export default Footer;
