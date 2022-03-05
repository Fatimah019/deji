import React, { useMemo } from "react";
import { useTable } from "react-table";
import Loader from "../Loader";
import "./style.css";

const CustomTable = ({ columnsData, tableData, loading }) => {
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    tableInstance;

  return (
    <>
      {loading ? (
        <Loader visible={loading} />
      ) : (
        <>
          <table {...getTableProps}>
            <thead>
              {headerGroups?.map((headerGroup, index) => (
                <tr {...headerGroup?.getHeaderGroupProps()} key={index}>
                  {headerGroup?.headers?.map((column, index) => (
                    <th {...column?.getHeaderProps()} key={index}>
                      {column?.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            {data.length === 0 || !data ? (
              <tfoot>
                <tr>
                  <td>No Content To Display</td>
                </tr>
              </tfoot>
            ) : (
              <tbody {...getTableBodyProps()}>
                {rows?.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr {...row?.getRowProps()} key={index}>
                      {row?.cells?.map((cell, index) => {
                        return (
                          <td {...cell?.getCellProps()} key={index}>
                            {cell?.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </>
      )}
    </>
  );
};

export default CustomTable;
