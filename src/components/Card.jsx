import "./Card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    return (
        <>
            <div className="card">
                <div className="left">
                    <img src={props.content.imageUrl} alt="" className="place-image" />
                </div>
                <div className="right">
                    <div className="location-container">
                        <h2 className="location-title"><FontAwesomeIcon icon={faLocationDot} className="location-icon" /> {props.content.location}</h2>
                        <a href={props.content.googleMapsUrl} className="location-url">View on Google Maps</a>
                    </div>
                    <h3 className="place-title">{props.content.title}</h3>
                    <p className="dates">{props.content.startDate} - {props.content.endDate}</p>
                    <p className="description">{props.content.description}</p>
                </div>
            </div>
            <div className="separator"></div>
        </>
    );
}