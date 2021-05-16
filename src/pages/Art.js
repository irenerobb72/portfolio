import { wild, sun, skeleton, skull, wowsky, sandy, moonsky, purple  } from '../images/index.js'

export function Art() {
  return (
    <div className="Art">
      <div className="art-content">
        <div className="art-item one">
          <img src={sun} alt="sun" className="art-image" />
        </div>
        <div className="art-item two">
          <img src={skeleton} alt="skeleton" className="art-image" />
        </div>
        <div className="art-item three">
          <img src={skull} alt="skull" className="art-image" />
        </div>
        <div className="art-item four">
          <img src={wowsky} alt="wowsky" className="art-image" />
        </div>
        <div className="art-item five">
          <img src={moonsky} alt="moonsky" className="art-image" />
        </div>
        <div className="art-item six">
          <img src={purple} alt="purple" className="art-image" />
        </div>
        <div className="art-item seven">
          <img src={sandy} alt="sandy" className="art-image" />
        </div>
        <div className="art-item eight">
          <img src={wild} alt="wild" className="art-image" />
        </div>
      </div>
    </div>
  );
}

