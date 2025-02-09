import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Menu, { MenuItem } from "site/islands/Menu.tsx";
import ButtonPrice from "site/islands/ButtonPrice.tsx";

export interface SocialItem {
  name?: "Facebook" | "Instagram" | "Linkedin" | "YouTube";
  url?: string;
}

interface Props {
  imageSrc?: ImageWidget;
  imageAlt?: string;
  imageTitle?: string;
  menu?: MenuItem[];
  menuMobile?: MenuItem[];
  social?: SocialItem[];
}

function Header({
  imageSrc,
  imageAlt,
  imageTitle,
  menu,
  menuMobile,
  social,
}: Props) {
  return (
    <div class="
      bg-linked-primary
      fixed xl:flex
      xl:items-center
      border-b
      border-neutrals-white-20
      h-[80px] xl:h-[96px]
      top-0
      w-full
      z-[90]
    ">
      <div class="
        flex items-center justify-between
        mx-auto
        pt-[20px] xl:pt-0
        px-4
        relative
        w-full xl:w-[1460px]
      ">
        {imageSrc && (
          <a href="/">
            <Image
              class="
                fixed xl:relative
                top-[26px] xl:top-0
                h-[28px] xl:h-[35px]
                w-[167px] xl:w-[209px]
                z-[130]
              "
              src={imageSrc || ""}
              alt={imageAlt || ""}
              title={imageTitle || ""}
              height={35}
              width={209}
            />
          </a>
        )}

        <Menu menu={menu} menuMobile={menuMobile} social={social} />

        <div class="
          hidden xl:block
          xl:w-[358px]
        ">
          <ButtonPrice />
        </div>
      </div>
    </div>
  );
}

export default Header;
