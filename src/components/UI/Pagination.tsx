import { SetStateNumber } from "../../types/index.types";
import classes from "./Pagination.module.scss";

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
    <div>
      <ul className={classes.container}>
        {currentPage !== 1 && (
          <li className={classes.arrows}>
            <span onClick={prevPageHandler}>Previous</span>
          </li>
        )}

        {pageNumbers.map((pgNumber) => (
          <li
            className={`${classes.numbers} ${
              currentPage == pgNumber ? `${classes.active}` : ""
            }`}
            key={pgNumber}
          >
            <span onClick={() => setCurrentPage(pgNumber)}>{pgNumber}</span>
          </li>
        ))}

        {currentPage !== numberPages && (
          <li className={classes.arrows}>
            <span onClick={nextPageHandler}>Next</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
