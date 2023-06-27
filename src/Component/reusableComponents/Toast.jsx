export const Toast = () =>{
    const data = [
        {
            heading: 'bootstrap',
            discription: 'Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.',
            type: '',
            time: '11 mins ago'
        },
        {
            heading: 'bootstrap',
            discription: 'Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.',
            type: 'secondary',
            time: '11 mins ago'
        },
        {
            heading: 'bootstrap',
            discription: 'Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.',
            type: 'success',
            time: '11 mins ago'
        },
        {
            heading: 'bootstrap',
            discription: 'Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.',
            type: 'danger',
            time: '11 mins ago'
        },
        {
            heading: 'bootstrap',
            discription: 'Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.',
            type: 'info',
            time: '11 mins ago'
        },
    ]
    return(
        <div className="container">
            <h5 className="card-header">Bootstrap Toasts Styles</h5>
            <div className="row g-0">
                <div className="col-md-6 p-4">
                    <div className="text-light small fw-semibold mb-3">Default</div>
                    <div className="toast-container">
                        {data?.map((item) => (
                            <div className={`bs-toast toast fade show ${item?.type ? `bg-${item?.type}`: null } `} role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-semibold">{item?.heading}</div>
                                    <small>{item?.title}</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    {item?.discription}
                                </div>
                            </div>
                        ))}                                  
                    </div>
                </div>
            </div>
        </div>
    )
}