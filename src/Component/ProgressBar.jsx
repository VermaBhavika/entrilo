export const ProgressBar = () => {
    return(
        <div className="container-xxl">
            <div className="card mb-4">
                <h5 className="card-header">Animated</h5>
                <div className="card-body">
                    <div className="demo-vertical-spacing demo-only-element">
                        
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                 style={{ width: '20%'}}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <div className="progress"> 
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                                role="progressbar"
                                style={{ width: '30%' }}
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                role="progressbar"
                                style={{ width: '40%' }}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                role="progressbar"
                                style={{ width: '75%' }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                role="progressbar"
                                style={{width: '60%' }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                                role="progressbar"
                                style={{ width: '50%' }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-dark"
                                role="progressbar"
                                style={{ width: '85%' }}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}