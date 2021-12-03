import { img_300, unavailable } from "../../config/config";
import Badge from "@mui/material/Badge";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "error"} />
      <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className="title">{title}</b>
      <span className="subtitle">{media_type === "tv" ? "TV Series" : "Movie"}</span>
    </ContentModal>
  );
};

export default SingleContent;
