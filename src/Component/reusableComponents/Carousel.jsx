import slider_img1 from '../../assests/img/elements/1.jpg'; 
import slider_img2 from '../../assests/img/elements/2.jpg'; 
import slider_img3 from '../../assests/img/elements/3.jpg'; 

const Slider = [
    { image:slider_img1, heading:'First slide', description:'Eos mutat malis maluisset et, agam ancillae quo te, in vim congue pertinacia.'},
    { image:slider_img2, heading:'Second slide', description:'In numquam omittam sea.'},
    { image:slider_img3, heading:'Third  slide', description:'Lorem ipsum dolor sit amet, virtute consequat ea qui, minim graeco mel no.'},
    ];


export const Carousel = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Carousel</h4>

                    <div className="row">
                       
                        <div className="col-md-6">
                           

                            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
                                    <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
                                    <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    
                                    {
                                            Slider.map((item)=>(
                                                <>
                                                
                                                <div className="carousel-item active">
                                                    <img className="d-block w-100" src={item.image} alt="Second slide" />
                                                    <div className="carousel-caption d-none d-md-block">
                                                            <h3>{item.heading}</h3>
                                                            <p>{item.description}</p>
                                                    </div>
                                                 </div>
                                                </>
                                               
                                            ))
                                        }
                                    
                                </div>
                                <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

