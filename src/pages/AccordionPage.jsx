import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can I use react on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: 2,
      label: "Can I use JS on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: 3,
      label: "Can I use CSS on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-8xl">Accordion</h1>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;

/* Using Tailwind CSS
  1. Decide on a new styling rule you want to add
  2. Go to tailwind.css/docs
  3. Hit CMD + K to search
  4. Search for your styling rule
  5. Add appropriate className to elements
*/
