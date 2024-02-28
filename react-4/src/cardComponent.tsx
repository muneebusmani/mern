import { entry } from "./cardEntries";

const styles = {
  height: "auto",
};
const CardComponent = (props: entry) => {
  return (
    <>
      <div className="col-2 column-gap-0">
        <div className="card" style={styles}>
          <img
            src={props.cardImgSrc}
            className="card-img-top"
            alt={props.cardImgAlt}
          />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardText}</p>
            <a href={props.cardLink} className="btn btn-primary">
              {props.cardLinkText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardComponent;
