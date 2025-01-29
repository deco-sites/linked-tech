import TabsWihContent from "site/islands/TabsWihContent.tsx";

export interface Props {
  titulo?: string;
  abas?: {
    nome?: string;
    conteúdo?: string;
  }[];
}

function PaginaSobreLinkedCultura({ 
  titulo,
  abas,
}: Props) {
  return (
    <div class="bg-primary-light w-full">
      <div class="
        mx-auto
        py-[80px] xl:py-[120px]
        w-full xl:max-w-[706px]
      ">
        <h3 class="
          px-4
          pb-[16px] xl:pb-[24px]
          text-neutrals-dark-100
          text-[18px] xl:text-[22px]
          w-full
        ">
          {titulo}
        </h3>
        <TabsWihContent tabs={abas} />
      </div>
    </div>
  );
}

export default PaginaSobreLinkedCultura;
