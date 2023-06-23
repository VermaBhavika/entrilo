export const Breadcrumbs = () => {
    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <h5 className="card-header">Breadcrumbs</h5>
                    <div className="card-body">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1">
                                <li className="breadcrumb-item">
                                    <a href="javascript:void(0);">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="javascript:void(0);">Library</a>
                                </li>
                                <li className="breadcrumb-item active">Data</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
