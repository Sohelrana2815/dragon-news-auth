import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-outline hover:bg-slate-300">
        Breaking News
      </button>
      <Marquee className="cursor-pointer" pauseOnHover={true} speed={100}>
        <span className="ml-12  text-gray-700">
          UN Supports Relief Efforts After Cyclone Remal:
          <a
            className="btn btn-link"
            target="_blank"
            href="https://www.globalissues.org/news/2024/05"
          >
            Global issues
          </a>
        </span>
        <span className="ml-12 text-gray-700">
          Israeli Airstrikes in Rafah:
          <a
            className="btn btn-link"
            target="_blank"
            href="https://www.timesofisrael.com/"
          >
            The Time of Israel
          </a>
        </span>
        <span className="ml-12 text-gray-700">
          US Suspends Aid Deliveries to Gaza:
          <a
            className="btn btn-link"
            target="_blank"
            href="https://www.timesofisrael.com/"
          >
            The Time of Israel
          </a>
        </span>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
