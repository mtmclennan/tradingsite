import { SetStateNumber } from "../../types/index.types";
import classes from "./Pagination.module.css";

type PaginationProps = {
  numberPages: number;
  currentPage: number;
  setCurrentPage: SetStateNumber;
};

const Pagination = ({
  numberPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pageNumbers = [...Array(numberPages + 1).keys()].slice(1);

  const nextPageHandler = () => {
    if (currentPage !== numberPages)
      setCurrentPage((currentPage: number) => currentPage + 1);
  };

  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage((currentPage) => currentPage - 1);
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
