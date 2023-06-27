export const Breadcrumbs = (props) => {

    function isLast(index){
        return index === props.crumbs.length - 1;
    }

    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <h5 className="card-header">{props.mainheading}</h5>
                    <div className="card-body">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1">
                               { props.crumbs.map((crumb, ci) => {
                                const disabled = isLast(ci) ? 'disabled' : '';
                                    return(
                                        <>
                                            <li key={ ci } className="breadcrumb-item">
                                                <a href="javascript:void(0);" className={`${disabled}`} onClick={()=> props.selected(crumb)}>
                                                    {crumb}
                                                </a>
                                            </li>
                                        </>
                                    );
                             })
                            }
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
