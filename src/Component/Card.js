
 import { BsFillBagHeartFill } from "react-icons/bs";
function Cards({img,title,star,reviews,newPrice,prevPrice}) {

    return (
        <>
            <section className="card">
                <img 
                src={img} 
                alt={title} 
                className="card-img"
                /> 
                <div className="card-details">
                    <h3 className="card-title">{title}</h3>
                    <section className="card-reviews">
                      {star}{star}{star}{star}
                      
                        <span className="total-review">{reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>{prevPrice}</del> {newPrice}
                        </div>

                        <div className="bag">
                            <BsFillBagHeartFill className="bad-icon" />
                        </div>
                    </section>
                </div>
            </section>


        </>
    )
}

export default Cards;