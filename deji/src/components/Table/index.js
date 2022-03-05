import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";

const CustomTable = ({
  columnsData,
  tableData,
  tablePageSize,
  tableTotalCount,
  currentPage,
  loading,
}) => {
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: currentPage, pageSize: tablePageSize },
      manualPagination: true,
      pageCount: Math?.ceil(tableTotalCount / tablePageSize),
    },
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    tableInstance;

  return (
    <>
      {loading ? (
        <div>Loading</div>
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
                {page?.map((row, index) => {
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
