export const ProgressBar = () => {
    const data = [
        {
            type: 'primary',
            size:'20'
        },
        {
            type: 'secondary',
            size:'30'
        },
        {
            type: 'success',
            size:'40'
        },
        {
            type: 'danger',
            size:'75'
        },
        {
            type: 'warning',
            size:'60'
        },
        {
            type: 'info',
            size:'50'
        },
        {
            type: 'dark',
            size:'85'
        },
    ]
    return(
        data?.length> 0 && 
        <div className="container-xxl">
            <div className="card mb-4">
                <h5 className="card-header">Animated</h5>
                <div className="card-body">
                    <div className="demo-vertical-spacing demo-only-element">
                        {data?.map((item) => (
                            
                                item?.size && item.type  && 
                                <><div className="progress">
                                 <div 
                                    className={`progress-bar progress-bar-striped progress-bar-animated bg-${item?.type}`}
                                    style={{ width: `${item?.size}%` }}
                                    aria-valuenow={item?.size}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div></>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}