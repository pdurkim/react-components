import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import Table from "./Table";
import useSort from "../hooks/useSort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer border-b hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center gap-2 p-2">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <BsChevronUp />
        <BsChevronDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <BsChevronUp />
        <BsChevronDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <BsChevronUp />;
  } else if (sortOrder === "desc") {
    return <BsChevronDown />;
  }
}

export default SortableTable;
