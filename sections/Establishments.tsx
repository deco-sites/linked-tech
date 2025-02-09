import EstablishmentsIsland from "site/islands/Establishments.tsx";

function Establishments() {
  return (
    <div class="
      w-full
      pt-28 pb-28
    ">
      <div class="
        mx-auto
        max-w-[888px]
        px-4
      ">
        <h2 class="
          text-[24px] xl:text-[48px]
          text-center
          text-neutrals-dark-100
          font-semibold
          mb-16
          leading-[115%]
          tracking-[-0.96px]
        ">
          Soluções para todos os tipos<br />
          de estabelecimentos
        </h2>

        <EstablishmentsIsland />
      </div>
    </div>
  );
}

export default Establishments;
