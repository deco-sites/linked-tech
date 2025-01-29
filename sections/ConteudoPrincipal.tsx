import GlobalIslands from "site/islands/ConteudoPrincipal.tsx";

export interface Props {
  price?: string;
}

function CommonContent({ price }: Props) {
  return(
    <GlobalIslands price={price} />
  )
}

export default CommonContent;