import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th className="border-b" key={column.label}>
        <div className="flex items-center p-3">{column.label}</div>
      </th>
    );
  });

  const tableRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="w-1/2 border border-slate-200 text-xl">
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default Table;
