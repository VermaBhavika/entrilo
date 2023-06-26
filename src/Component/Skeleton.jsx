import Avatar1 from '../assests/img/avatars/1.png'

export const Skeleton = () => {
    return (
        <>
            <div className="container loading-skeleton">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={Avatar1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Avatar1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container loading-skeleton">
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect2">Example multiple select</label>
                        <select multiple className="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}