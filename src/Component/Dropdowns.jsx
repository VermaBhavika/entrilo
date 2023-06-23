export const Dropdowns = () => {
    return (
        <div className="container-xxl">
            <div className="card mb-4" id="btn-dropdown-demo">
                <h5 className="card-header">Dropdowns</h5>
                <div className="card-body">
                    <small className="text-light fw-semibold">Basic</small>
                    <div className="demo-inline-spacing">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Primary
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Secondary
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-success dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Success
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-danger dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Danger
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-warning dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Warning
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-info dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Info
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}