import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex cursor-pointer items-center justify-between border-b bg-gray-50 p-3"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="rounded border-x border-t">{renderedItems}</div>;
};

export default Accordion;

/*
State Design Process

When should I use state? When we need to change content on the screen
What should it be called?
What type of data will my state be?
Which component should it be defined in?

Phase 1
1. List out what a user will do and changes they will see while using your app
2. Categorize each step as 'state' or 'event handler'
3. Group common steps. Remove duplicates. Rewrite descriptions.

Phase 2
4. Look at mockup. Remove or simplify parts that aren't changing.
5. Replace remaining elements with text descriptions.
6. Repeat #4 and #5 with a different variation.
7. Imagine you have to write a function that returns the text from #5 and #6. In addition to your component props, what other arguments would you need?
*/

/*
State Design Process for an Accordion
1. List out what a user will do and changes they will see while using your app
  a. Clicked on third section
  b. First section collapsed
  c. Third section expanded
  d. Click on second section
  e. Third section collapsed
  f. Second section expanded

2. Categorize each step as 'state' or 'event handler'
  a. Clicked on third section = event handler
  b. First section collapsed = state
  c. Third section expanded = state
  d. Click on second section = event handler
  e. Third section collapsed = state
  f. Second section expanded = state

3. Group common steps. Remove duplicates. Rewrite descriptions.
  a. Clicking on a section
  b. Expanded + Collapsed state
*/
