import { Link } from "react-router-dom";

const NewsCard = ({ sNews }) => {
  const { title, image_url, details, _id } = sNews;
  return (
    <>
      <div className="card  bg-base-100 shadow-sm mb-16 ">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
                Read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
        <figure>
          <img src={image_url} alt={title.slice(0, 10)} />
        </figure>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </>
  );
};

export default NewsCard;
