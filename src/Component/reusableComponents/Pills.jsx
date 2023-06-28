
export const Pills = () => {
    const data = [
        {
            tabTitle: 'Home ',
            tabDiscription: 'Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps powder.Bear claw candy topping. Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon jelly- o jelly - o ice cream jelly beans candy canes cake bonbon.Cookie jelly beans marshmallow] jujubes sweet.'
        },
        {
            tabTitle: 'Profile ',
            tabDiscription: 'Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice cream.Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread.Pastry ice cream cheesecake fruitcake.'
        },
        {
            tabTitle: 'Message ',
            tabDiscription: 'Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies cupcake gummi bears cake chocolate. Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly jelly - o tart brownie jelly.'
        }
    ]
    // const [isactive, setIsActive] = useState()
    return (
        data?.length>0 && 
        <>

            <div className="container">
                <h5 className="py-3 my-4">Pills</h5>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="nav-align-top mb-4">
                            <ul className="nav nav-pills mb-3" role="tablist">
                                {data?.map((item, index) => (
                                    item.tabTitle && <li className="nav-item">
                                        <button
                                            type="button"
                                            className={`nav-link ${index == 0 ? "active" : ''}`}
                                            role="tab"
                                            data-bs-toggle="tab"
                                            data-bs-target={`#navs-pills-top-${index+1}`}
                                            aria-controls={`navs-pills-top-${index + 1}`}
                                            aria-selected="true"
                                        >
                                            {item.tabTitle}
                                        </button>
                                        
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content">
                                {data.map((item, index) => (
                                    item.tabDiscription && <div className={`tab-pane fade show ${index == 0 ? "active" : ''}`} id={`navs-pills-top-${index + 1}`} role="tabpanel">
                                       {item.tabDiscription}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}