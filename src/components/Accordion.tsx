import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

interface item {
  name: string;
  link: string;
}
interface Props {
  title: string;
  items: item[];
}

const Accordion = ({ title, items }: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <section
      className={`cursor-pointer px-4 py-2 rounded-2xl hover:bg-gray-100 sm:hover:bg-transparent ${
        isSelected ? "collapsible--expanded" : ""
      }`}
    >
      <header
        onClick={() => setIsSelected(!isSelected)}
        className="flex items-center justify-between"
      >
        <h2 className="text-l font-semibold mb-5">{title}</h2>

        <RxChevronRight size={25} className="collapsible__chevron" />
      </header>
      <ul className="collapsible__content flex flex-col gap-1 text-gray-600">
        {items.map((item, index) => (
          <li className="cursor-pointer hover:text-black mb-1" key={index}>
            <a href={item.link}> {item.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Accordion;
