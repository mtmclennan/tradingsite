import classes from "./Pagination.module.css";

const Pagination = ({ numberPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(numberPages + 1).keys()].slice(1);

  const nextPageHandler = () => {
    if (currentPage !== numberPages) setCurrentPage(currentPage + 1);
  };

  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav>
      <ul className={classes.container}>
        {currentPage !== 1 && (
          <li className={classes.arrows}>
            <a onClick={prevPageHandler}>Previous</a>
          </li>
        )}

        {pageNumbers.map((pgNumber) => (
          <li
            className={`${classes.numbers} ${
              currentPage == pgNumber ? `${classes.active}` : ""
            }`}
            key={pgNumber}
          >
            <a onClick={() => setCurrentPage(pgNumber)}>{pgNumber}</a>
          </li>
        ))}

        {currentPage !== numberPages && (
          <li className={classes.arrows}>
            <a onClick={nextPageHandler}>Next</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;