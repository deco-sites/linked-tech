import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Menu, { MenuItem } from "../islands/Menu.tsx";

interface Props {
  imageSrc?: ImageWidget;
  imageAlt?: string;
  imageTitle?: string;
  menu?: MenuItem[];
  menuMobile?: MenuItem[];
}

function Header({
  imageSrc,
  imageAlt,
  imageTitle,
  menu,
  menuMobile
}: Props) {
  return (
    <div class="
      bg-linked-primary
      fixed xl:flex
      xl:items-center
      border-b
      border-neutrals-white-20
      h-[80px]
      top-0
      w-full
      z-[90]
    ">
      <div class="
        flex items-center
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

        <Menu menu={menu} menuMobile={menuMobile} />

        <button class="
          hidden xl:block
          absolute
          bg-linked-secondary
          px-6
          py-2
          rounded-md
          right-[1rem]
        ">
          Monte seu plano
        </button>
      </div>
    </div>
  );
}

export default Header;
