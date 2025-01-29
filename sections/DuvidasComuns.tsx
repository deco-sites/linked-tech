import FaqAccordion from "site/islands/FaqAccordion.tsx";

export interface Props {
  title?: string;
  /**
   * @title Dúvidas
   */
  doubts?: {
    question?: string;
    answer?: string;
  }[];
}

function DuvidasComuns({ title, doubts }: Props) {
  return (
    <>
      <FaqAccordion title={title} doubts={doubts} />
    </>
  );
}

export default DuvidasComuns;
