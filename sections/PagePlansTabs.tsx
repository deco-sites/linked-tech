import Tabs, { Props } from "../islands/Tabs.tsx";

function PagePlansTabs({
  tabs,
}: Props ) {
  return (
    <div class="bg-neutrals-dark-100 border-b-2 border-neutrals-white-20 flex justify-center w-full">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default PagePlansTabs;