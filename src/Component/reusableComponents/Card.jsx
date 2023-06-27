import card_img from '../../assests/img/elements/1.jpg'; 

export const Cards = (props) => {
    return (
        <>
 
 <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-3">
                        <div className="card h-100">
                            <img className="card-img-top" src={card_img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">
                                {props.description}
                                </p>
                                <a href="javascript:void(0)" className="btn btn-outline-primary">{props.button}</a>
                            </div>
                        </div>
                    </div>
                </div></div>
        </>

    );
}