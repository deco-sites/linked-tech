// import Icon from "site/components/ui/Icon.tsx";
import Header from "site/islands/MonteSeuPlano/Header.tsx";
import Form from "site/islands/MonteSeuPlano/Form.tsx";
import FixedBar from "site/islands/MonteSeuPlano/FixedBar.tsx";

function MonteSeuPlano () {
  return (
    <>
      <Header />

      {/* Title Page */}
      <div class="
        bg-neutrals-dark-100
        w-full
      ">
        <div class="
          mx-auto
          mt-[-24px] xl:mt-0
          px-4 pt-[48px] pb-[32px] xl:pt-[100px] xl:pb-[70px]
          xl:text-center
          w-full xl:max-w-[592px]
        ">
          <h2 class="
            font-medium xl:font-normal
            leading-[110%]
            text-[32px] xl:text-[64px]
            text-neutrals-white-100
            tracking-[-0.64px] xl:tracking-[-1.28px]
          ">
            Monte o <strong class="font-medium text-primary-medium">plano ideal</strong>
          </h2>
          <p class="
            font-normal xl:font-light
            pt-[16px] pt-[24px]
            text-[14px]
            text-neutrals-white-80
          ">
            Cada estabelecimento tem suas particularidades. Por isso a Linked Tech permite que você monte a plataforma do jeito que faz sentido para seu negócio. 
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <FixedBar />

      <Form />
    </>
  )
}

export default MonteSeuPlano;