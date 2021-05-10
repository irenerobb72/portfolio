import art from "../images/color-art.png";
import { castle, island, dogs, cows, moher, grave } from "../images/index.js";

export function Travel() {
  return (
    <div className="Travel">
      <div className="travel-container">
        <div className="main-text">
          <h1>Ireland</h1>
          <p>
            In 2019, I traveled to Ireland and went to the west coast. Some of
            the places I visited are Dingle, Galway, Cliffs of Moher and
            Kinsale.
          </p>
        </div>
        <div className="travel-img-container">
          <div className="travel-item">
            <img src={castle} alt="castle" id="castle-image" />
          </div>
          <div className="travel-item">
            <img src={island} alt="island" id="island-image" />
          </div>
          <div className="travel-item">
            <img src={dogs} alt="dogs" id="dogs-image" />
          </div>
          <div className="travel-item">
            <img src={cows} alt="cows" id="cows-image" />
          </div>
          <div className="travel-item">
            <img src={moher} alt="moher" id="moher-image" />
          </div>
          <div className="travel-item">
            <img src={grave} alt="grave" id="grave-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
