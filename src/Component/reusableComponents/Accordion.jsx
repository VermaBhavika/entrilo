export const Accordion = () => {
    const data = [
        {
            title: "Accordion Item 1",
            discription: "Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie."
        },
        {
            title: "Accordion Item 2",
            discription: "Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups."
        },
        {
            title: "Accordion Item 3",
            discription: "Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake dragée caramels. Ice cream wafer danish cookie caramels muffin."
        }
    ]
    return (
        data?.length > 0 &&
        <div className="content-wrapper">

            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Accordion</h4>

                <h5 className="mt-4">Accordion</h5>
                <div className="row">
                    <div className="col-md mb-4 mb-md-0">
                        <small className="text-light fw-semibold">Basic Accordion</small>
                        <div className="accordion mt-3" id="accordionExample">
                            {data?.map((item, index) => (
                                <>
                                    <div className="card accordion-item ">
                                        {item?.title && <h2 className="accordion-header" id="headingOne">
                                            <button
                                                type="button"
                                                className="accordion-button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${index}`}
                                                aria-expanded="false"
                                                aria-controls={index}
                                            >
                                                {item?.title}
                                            </button>
                                        </h2>}

                                        {item?.discription && <div
                                            id={index}
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                {item?.discription}
                                            </div>
                                        </div>}
                                    </div>

                                </>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}