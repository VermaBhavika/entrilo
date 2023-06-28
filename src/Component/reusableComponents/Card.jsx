export const Cards = (props) => {
    return (
        
        <>
 
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                <h4 className="fw-bold py-3 mb-4">Card Design </h4>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <div className="card h-100">
                        {props.Image &&<img className="card-img-top" src={props.Image} alt="Card image cap" />}
                            <div className="card-body">
                            {props.title && <h5 className="card-title">{props.title}</h5>}
                            {props.description &&   <p className="card-text">
                                {props.description}
                                </p>}
                                {props.button &&  <a href="javascript:void(0)" className="btn btn-outline-primary">{props.button}</a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}