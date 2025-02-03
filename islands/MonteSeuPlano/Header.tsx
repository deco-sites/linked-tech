import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

function Header() {
  return (
    <>
      <div
        class="
          bg-neutrals-dark-100
          fixed
          top-0
          w-full
        "
      >
        <div class="
          flex items-center justify-between xl:justify-center
          h-[56px] xl:h-[96px]
          mx-auto
          pl-2 pr-4 xl:pl-0 xl:pr-0
          relative
          w-full xl:max-w-[1460px]
        ">
          <button onClick={() => history.back()}>
            <Icon
              id="Arrow"
              width={32}
              height={32}
              strokeWidth={2}
              class="
                xl:absolute
                xl:left-2
                xl:top-[calc(50%-16px)]
                text-primary-medium
              "
            />
          </button>

          <a href="/">
            <Image
              class="
                h-[20px] xl:h-[35px]
                w-[119px] xl:w-[209px]
              "
              src="https://data.decoassets.com/linked-tech/e23eeb42-3e49-489b-a71d-b79bfcbee6ec/logo-header.png"
              alt={""}
              title={""}
              height={35}
              width={209}
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Header;