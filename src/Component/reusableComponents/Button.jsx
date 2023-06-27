export const Button = () => {
    const data = [
        {
            buttonTitle: 'Primary',
            buttonType: 'primary',
        },
        {
            buttonTitle: 'Secondary',
            buttonType: 'secondary',
        },
        {
            buttonTitle: 'Success',
            buttonType: 'success',
        },
        {
            buttonTitle: 'Danger',
            buttonType: 'danger',
        },
        {
            buttonTitle: 'warning',
            buttonType: 'warning',
        },
        {
            buttonTitle: 'info',
            buttonType: 'info',
        },
    ]
    return (
        <div className="container-xxl">
            <div className="card mb-4" id="btn-dropdown-demo">
                <h5 className="card-header">Buttons</h5>
                <div className="card-body">
                    <small className="text-light fw-semibold">Basic</small>
                    <div className="demo-inline-spacing">

                        {data?.map((item) => (
                            <>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className={`btn btn-${item?.buttonType}`}
                                       
                                    >
                                        {item?.buttonTitle}
                                    </button>
                                    
                                </div>
                            </>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    )
}