import WideCard from "../components/WideCard";

const library = ({ library }) => {
  // console.log(library);

  return (
    <div className="m-5 flex flex-wrap">
      <WideCard />
      <WideCard />
      <WideCard />
      <WideCard />
      <WideCard />
      <WideCard />
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
