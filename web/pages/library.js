import { useState } from "react";

import WideCard from "../components/WideCard";
import Pagination from "../components/Pagination";

const library = ({ library }) => {
  const articles = Object.values(library.list);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(6);

  // Get current Articles
  const indexOfLastPost = currentPage * articlesPerPage;
  const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="m-5 flex flex-wrap">
        {currentArticles.map((article) => (
          <WideCard
            title={article.resolved_title}
            url={article.resolved_url}
            image={article.top_image_url}
            readTime={article.time_to_read}
          />
        ))}
      </div>
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
      />
    </>
  );
};

export default library;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://getpocket.com/v3/get?consumer_key=${process.env.NEXT_PUBLIC_consumerKey}&access_token=${process.env.NEXT_PUBLIC_accessToken}`
  );
  const library = await res.json();

  return {
    props: {
      library
    }
  };
};
