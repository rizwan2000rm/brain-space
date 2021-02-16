const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="m-5 flex">
      {pageNumbers.map((number) => (
        <span
          onClick={() => paginate(number)}
          className="px-4 py-2 mr-4 active"
          key={number}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
