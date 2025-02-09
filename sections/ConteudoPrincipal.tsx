import CommonContentIslands from "site/islands/ConteudoPrincipal.tsx";

export interface EstablishmentsItem {
  name?:
    "A la carte" |
    "Bar" |
    "Cafeteria" |
    "Fast-food" |
    "Padaria" |
    "Pizzaria" |
    "Self-Service" |
    "Sorveteria" |
    "De rua" |
    "Japonês" |
    "Redes e franquias" |
    "Fine-dining" |
    "Churrascaria" |
    "Outros"
  ;
  url?: string;
}

export interface Props {
  price?: string;
  /**
   * @title Estabelecimentos
   * @description Adicione os segmentos dos estabelecimentos
   * @default -
   */
  establishments?: EstablishmentsItem[];
}

function CommonContent({
  price,
  establishments
}: Props) {
  return(
    <>
      <CommonContentIslands
        price={price}
        establishments={establishments}
      />
    </>
  )
}

export default CommonContent;