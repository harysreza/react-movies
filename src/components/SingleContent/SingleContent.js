import { img_300, unavailable } from "../../config/config";
import Badge from "@mui/material/Badge";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

let stringTruncate = function (str, length) {
  let dots = str.length > length ? "..." : "";
  return str.substring(0, length) + dots;
};

const SingleContent = ({ id, poster, title, media_type, vote_average }) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "error"} />
      <div className="zoom">
        <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      </div>
      <b className="title">{stringTruncate(title, 20)}</b>
      <span className="subtitle">{media_type === "tv" ? "Series" : "Movie"}</span>
    </ContentModal>
  );
};

export default SingleContent;
