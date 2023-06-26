import card_img from '../assests/img/elements/1.jpg'; 


export const Images = () => {
    return (
        <>
             <div className="container-xxl flex-grow-1 container-p-y">
             <img src={card_img} alt="image" lazyloading />
             </div>
            
        </>
    );
    
    };