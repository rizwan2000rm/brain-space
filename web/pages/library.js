import WideCard from "../components/WideCard";

const library = ({ library }) => {
  return (
    <div className="m-5 flex flex-wrap">
      {Object.values(library.list).map((article) => (
        <WideCard
          title={article.resolved_title}
          url={article.resolved_url}
          image={article.top_image_url}
          readTime={article.time_to_read}
        />
      ))}
    </div>
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
