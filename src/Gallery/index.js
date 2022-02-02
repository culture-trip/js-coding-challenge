import { useState } from "react";
import "./index.css";

const API_URL =
  "https://app.theculturetrip.com/cultureTrip-api/v1/collections/27870463213093932773?pageType=location_places_to_stay&newSlug=true";

export function Gallery() {
  const [data, setData] = useState([]);

  //   if (!data) {
  //     // fetch(API_URL) then setData with the response
  //   }

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <ul>
      {/* Display data here */}
      </ul>
    </div>
  );
}
