interface Props {}

function Banner({}: Props) {
  return (
    <div class="
      bg-linked-primary
      h-[76vh]
      2xl:h-[60vh]
      top-0
      left-0
      w-full
      z-50
    ">
      <div class="
        h-[100%]
        px-4 flex flex-col mx-auto justify-center
        w-full xl:w-[1460px]
      ">
        <h2 class="
          font-medium
          text-neutrals-white-100 leading-[110%] 
          text-[32px] xl:text-[64px]
          tracking-[-0.64px] xl:tracking-[-1.28px]
        ">
          Gestão inteligente
        </h2>
        <h2 class="
          flex overflow-hidden
          text-neutrals-white-100 leading-[110%] 
          text-[32px] xl:text-[64px]
          tracking-[-0.64px] xl:tracking-[-1.28px]
        ">
          para
          <span class="animate-slide relative overflow-hidden w-full">
            <span class="text-linked-secondary text-slide">&nbsp;economizar</span>
            <span class="text-linked-secondary text-slide">&nbsp;lucrar</span>
            <span class="text-linked-secondary text-slide">&nbsp;sonhar mais</span> 
          </span>
        </h2>
        <p class="
          text-neutrals-white-80 xl:text-neutrals-white-100
          font-normal	xl:font-light
          text-[16px] xl:text-[18px]
          leading-[140%]
          pt-4 xl:pt-8
        ">
          A Linked entende as dores do seu negócio e pode te ajudar a economizar e lucrar mais.
        </p>
      </div>
    </div>
  );
}

export default Banner;
