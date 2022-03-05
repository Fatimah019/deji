import React from "react";
import { usePagination } from "./hooks/pagination";
import "./style.css";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage < 1 || paginationRange.length < 2) {
    return null;
  }
  const lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="pagination">
      <button
        className="pagination-item"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <i className="fa fa-angle-left"></i>
      </button>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === "...") {
          return (
            <button className="pagination-item dots" key={index}>
              &#8230;
            </button>
          );
        }

        return (
          <button
            key={index}
            className={`${
              currentPage === pageNumber
                ? "pagination-item-active"
                : "pagination-item"
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className="pagination-item"
        onClick={onNext}
        disabled={currentPage === lastPage}
      >
        <i className="fa fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
