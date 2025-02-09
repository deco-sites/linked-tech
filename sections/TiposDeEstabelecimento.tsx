import EstablishmentsIsland from "site/islands/Establishments.tsx";

function EstablishmentTypes() {
  return (
    <div class="
      establishments-type
      w-full
      pt-[40px] pb-[80px]
      xl:pt-[80px] xl:pb-[140px]
    ">
      <div class="
        xl:mx-auto
        max-w-[888px]
        px-4
      ">
        <h2 class="
          text-[22px] xl:text-[38px]
          xl:text-center
          text-neutrals-dark-100
          font-semibold
          leading-[115%]
          xl:mx-auto
          tracking-[-0.96px]
          xl:w-[600px]
        ">
          Em qual categoria  seu estabelecimento mais se encaixa?
        </h2>

        <p class="
          py-[32px] xl:py-[48px]
          text-[16px]
          text-neutrals-dark-80
          xl:text-center
        ">
          Clique e veja como a Linked pode ajudar.
        </p>

        <div className="list-establishments">
          <EstablishmentsIsland />
        </div>

        <p class="
          pt-[32px] xl:pt-[48px]
          text-[14px]
          text-neutrals-dark-80
          xl:text-center
        ">
          Ainda não estamos atendendo açougues e hortifrutis.
          <br /><br />
          Não achou seu tipo de estabelecimento aqui? Entre em contato com nosso time para avaliarmos a viabilidade.
        </p>
      </div>
    </div>
  );
}

export default EstablishmentTypes;
