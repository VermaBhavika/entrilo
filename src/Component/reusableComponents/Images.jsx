import card_img from '../../assests/img/elements/1.jpg'; 


export const Images = (props) => {
    return (
        <>
             <div className="container-xxl flex-grow-1 container-p-y">
             <h5 className="card-header">{props.mainheading}</h5>
                <img src={card_img} alt="image" lazyloading />
             </div>
            
        </>
    );
    
    };