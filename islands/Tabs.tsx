export interface TabsItem {
  /**
   * @title Nome da página.
   * @itemTitle pageName
   */
  tabName: string;
  /**
   * @title URL da página.
   */
  tabUrl: string;
}

export interface Props {
  tabs?: TabsItem[];
}

const getUrl = window.location.pathname;

function Tabs({
  tabs,
}: Props) {
  return (
    <ul class="
      flex justify-between xl:justify-start
      xl:px-4
      w-full xl:w-[1460px]
    ">
      {tabs && tabs.map((item, index) => (
        <li
          class={`
            w-1/3 xl:w-auto
          `}
          key={index}
        >
          <a
            class={`
              block
              font-normal
              p-[12px] xl:py-[14px] xl:px-[40px]
              relative
              text-neutrals-white-80
              text-center
              text-[16px]

              ${getUrl === item.tabUrl
                ? 'after:content-[""] after:block after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-primary-medium'
                : ''}
            `}
            href={item.tabUrl}
            title={item.tabName}
          >
            {item.tabName}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;