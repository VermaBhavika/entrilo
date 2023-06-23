import card_img from '../assests/img/elements/1.jpg'; 

export const Cards = () => {
    return (
        <>

            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">UI Elements /</span> Cards Basic</h4>
                <div className="row mb-5">
                    <div className="col-md-6 col-lg-4 mb-3">
                        <div className="card h-100">
                            <img className="card-img-top" src={card_img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a href="javascript:void(0)" className="btn btn-outline-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                   
                    
                </div>

                <h5 className="pb-1 mb-4">Text alignment</h5>
                <div className="row mb-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="javascript:void(0)" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card text-center mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="javascript:void(0)" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card text-end mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="javascript:void(0)" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}