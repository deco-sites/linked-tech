

import Icon from "site/components/ui/Icon.tsx";

export const openRequestForm = () => {
  const form = document.getElementById("wrap-request-form");

  if (form?.classList.contains("hidden")) {
    form.classList.remove("hidden");
    setTimeout(() => form.classList.add("opacity-100"), 10);
  } else {
    form?.classList.remove("opacity-100");
    setTimeout(() => form?.classList.add("hidden"), 300);
  }
}

function FixedBar () {
  return (
    <div class="
      bg-white
      bottom-0
      fixed
      px-4 py-6 xl:px-[40px]
      shadow-[0px_-4px_8px_0px_rgba(0,0,0,0.12)]
      w-full
    ">
      <div class="
        flex items-center justify-between
        mx-auto
        w-full xl:max-w-[1460px]
      "> 
        <p class="
          font-bold
          text-[16px]
          text-neutrals-dark-80
        ">
          R$ 0,00/mês
          <span class="
            block xl:inline-block
            font-normal
            xl:ml-2
            text-[14px]
            text-neutrals-dark-80
          ">
            + R$ 0,00 de instalação
          </span>
        </p>
        <button
          class="
            bg-neutrals-dark-100
            flex items-center justify-center
            font-semibold
            px-[22px] py-2 xl:px-[20px] xl:py-[4px]
            rounded-lg
            text-[16px]
            text-primary-medium
            xl:w-[300px]
          "
          onClick={() => openRequestForm()}
        >
          Continuar
          <Icon
            id="Arrow"
            width={32}
            height={32}
            strokeWidth={2}
            class="
              relative
              left-[4px]
              scale-[0.8]
              transform rotate-180
            "
          />
        </button>
      </div>
    </div>
  )
}

export default FixedBar;