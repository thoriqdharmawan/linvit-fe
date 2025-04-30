"use client"

import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon"
import ChevronRightIcon from "@/components/icons/ChevronRightIcon"

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages)
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages)
      }
    }

    return pages
  }

  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-1 text-xs">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-md px-2 py-1 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronLeftIcon />
      </button>

      {getPageNumbers().map((page, idx) => (
        <button
          key={idx}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`rounded-md px-2 py-1 ${
            page === currentPage ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"
          } ${typeof page !== "number" && "cursor-default"}`}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-md px-2 py-1 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronRightIcon />
      </button>
    </div>
  )
}

export default Pagination
