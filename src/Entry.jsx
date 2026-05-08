import journal from "./data.js";
import pin from "./images/location-pin.png";

function Entry() {
    return ( 
        <>
            {journal.map((entry) => (
                <article className="entry" key={entry.id}>
                    <img src={entry.imageUrl} alt={entry.title} className="entry-image" />
                    <div className="entry-info">
                        <img src={pin} alt="Location Icon" className="location-icon" />
                        <span className="entry-location">{entry.location}</span>
                        <a href={entry.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="maps-link">View on Google Maps</a>
                        <h2 className="entry-title">{entry.title}</h2>
                        <p className="entry-dates">{entry.startDate} - {entry.endDate}</p>
                        <p className="entry-description">{entry.description}</p>
                    </div>
                </article>
            ))}
        </>
     );
}

export default Entry;