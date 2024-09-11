import "./hcard.css"

function Card(prop) {
    return ( 
        <div className="cardhome">
             <img src={prop.data.src} alt="" />
             <h2 className="h2carh">{prop.data.h2}</h2>
             <p className="pcarh">{prop.data.p}</p>
        </div>
     );
}

export default Card;