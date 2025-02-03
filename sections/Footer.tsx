import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { SocialItem } from "site/sections/Header.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

interface Props {
  imageSrc?: ImageWidget;
  imageAlt?: string;
  imageTitle?: string;
  copyright?: string;
  address?: string;
  social?: SocialItem[];
}

function Footer({
  imageSrc,
  imageAlt,
  imageTitle,
  copyright,
  address,
  social,
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

        <span class="block text-center text-white text-[11px] xl:text-[12px] pt-4 pb-12 font-secondary">{copyright}</span>

        {social && social.length > 0 && (
          <ul
            class="hidden xl:flex items-center justify-center"
          >
            {social.map((item, index) => (
              <li
                key={index}
                class="
                  py-8 pr-8
                  last:pr-0
                "
              >
                <a href={item.url} target="_blank" title={item.name}>
                  <Icon
                    id={`Social${item.name}` as AvailableIcons}
                    width={32}
                    height={32}
                    strokeWidth={2}
                    class={`
                      ${item.name === "Facebook" ? "bg-neutrals-dark-100" : ""}
                      text-white
                    `}
                  />
                </a>
              </li>
            ))}
          </ul>
        )}

        <address class="border-t border-neutrals-white-20 block text-center text-white not-italic text-[11px] xl:text-[12px] pt-8 w-[284px] xl:w-full mx-auto font-secondary">
          {address || ""}
        </address>
      </div>
    </div>
  );
}

export default Footer;
