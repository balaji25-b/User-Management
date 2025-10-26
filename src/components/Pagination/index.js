import './index.css'

const Pagination = ({currentPage, totalPages, onPageChange}) => (
  <div className="pagination">
    <button
      type="button"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Prev
    </button>
    <span>
      {currentPage} / {totalPages}
    </span>
    <button
      type="button"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
)

export default Pagination
