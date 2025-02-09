import { signal } from "@preact/signals";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import ButtonPrice from "site/islands/ButtonPrice.tsx";
import { SocialItem } from "site/sections/Header.tsx";

export interface MenuItem {
  /**
   * @title Nome da página.
   * @itemTitle pageName
   */
  pageName: string;
  /**
   * @title URL da página.
   */
  pageUrl: string;
}

interface Props {
  menu?: MenuItem[];
  menuMobile?: MenuItem[];
  social?: SocialItem[];
}

// Menu State
const isOpen = signal(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  
  isOpen.value
    ? document.body.classList.add('no-scroll')
    : document.body.classList.remove('no-scroll');
}

function Menu({
  menu,
  menuMobile,
  social,
}: Props ) {
  return (
    <>
      <div class="
        border-b
        border-neutrals-white-20
        bg-linked-primary
        h-[80px]
        fixed
        xl:hidden
        left-0
        top-0
        w-full
        z-[120]
      ">
      </div>

      <div
        id="menu"
        class={`
          bg-white xl:bg-transparent
          fixed xl:relative
          xl:flex
          h-[calc(100vh-80px)] xl:h-auto
          left-0 xl:left-auto
          overflow-y-auto
          p-4 xl:p-0
          ${isOpen.value ? "top-[80px]" : "top-[-100vh]"} xl:top-auto
          transition-top duration-500 ease-in-out xl:transition-none
          w-full xl:w-auto
          z-[100]
        `}
      >
        <ul class="xl:flex">
          {menu && menu.map((item, index) => (
            <li
              class={`
                border-b xl:border-b-0
                relative
                py-[22px] xl:py-0
                xl:mr-6
                font-normal text-neutrals-dark-100 text-[18px] leading-[100%]
                xl:font-light xl:text-white xl:text-[16px] leading-[140%]
                ${index === menu.length - 1 ? 'last:mr-0 last:border-b-0' : ''}
              `}
              key={index}
            >
              <a
                href={item.pageUrl}
                title={item.pageName}
              >
                {item.pageName}
                <Icon
                  id="ChevronRight"
                  width={22}
                  height={22}
                  strokeWidth={2}
                  class="
                    absolute xl:hidden
                    right-0
                    top-1/2
                    transform -translate-y-1/2
                    text-linked-secondary
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        <div class="my-[22px] xl:hidden">
          <ButtonPrice />
        </div>

        <ul class="xl:hidden">
          {menuMobile && menuMobile.map((item, index) => (
            <li
              class={`
                py-[22px]
                font-normal text-neutrals-dark-100 text-[16px] leading-[100%]
              `}
              key={index}
            >
              <a
                href={item.pageUrl}
                title={item.pageName}
                target={item.pageName === "Trabalhe conosco" ? "_blank" : "_self"}
              >
                {item.pageName}
              </a>
            </li>
          ))}
        </ul>

        {social && social.length > 0 && (
          <ul
            class="flex items-center xl:hidden"
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
                      ${item.name === "Facebook" ? "bg-white" : ""}
                      text-neutrals-dark-100
                    `}
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        class={`
          absolute
          cursor-pointer
          hamburger
          xl:hidden
          right-[1rem]
          top-[20px] xl:top-0
          z-[130]

          ${isOpen.value ? 'active' : null}
        `}
        onClick={toggleMenu}
      >
        <span class="pointer-events-none"></span>
      </div>
    </>
  );
}

export default Menu;