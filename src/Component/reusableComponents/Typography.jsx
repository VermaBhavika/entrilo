export const Typography = () => {
    const headingsData = [
        {
            heading: "Heading 1",
            title: "Bootstrap heading"
        },
        {
            heading: "Heading 2",
            title: "Bootstrap heading"
        },
        {
            heading: "Heading 3",
            title: "Bootstrap heading"
        },
        {
            heading: "Heading 4",
            title: "Bootstrap heading"
        },
        {
            heading: "Heading 5",
            title: "Bootstrap heading"
        },
        {
            heading: "Heading 6",
            title: "Bootstrap heading"
        },
    ]
    const displayData = [
        {
            heading: "Display 1",
            title: "Display 1",
        },
        {
            heading: "Display 2",
            title: "Display 2",
        },
        {
            heading: "Display 3",
            title: "Display 3",
        },
        {
            heading: "Display 4",
            title: "Display 4",
        },
        {
            heading: "Display 5",
            title: "Display 5",
        },
        {
            heading: "Display 6",
            title: "Display 6",
        }
    ]
    const paragraphData = [
        {
            title: 'Paragraph',
            para: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.Duis mollis, est non commodo luctus.Duis mollis, est non commodo luctus.'
        },
        {
            title: 'Lead Text',
            para: 'ivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.Duis mollis, est non commodo luctus.'
        },
        {
            title: 'Muted text',
            para: ' Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est Snon commodo luctus.'
        }
    ]
    const blockquoteData = [
        {
            title: 'A well-known quote, contained in a blockquote element.',
            figCaption: '',
            sourceTitle: ''
        },
        {
            title: 'A well-known quote, contained in a blockquote element.',
            figCaption: 'Someone famous in ',
            sourceTitle: 'Source Title'
        },
        {
            title: 'A well-known quote, contained in a blockquote element.',
            figCaption: 'Someone famous in ',
            sourceTitle: 'Source Title'
        }
    ]
    const listData = [
        {
            unstyled: [
                {
                    list: 'Lorem ipsum dolor sit amet',
                },
                {
                    list: 'Facilisis in pretium nisl aliquet',
                },
                {
                    list: 'Nulla volutpat aliquam velit',
                    innerList: [
                        {
                            list1: 'Phasellus iaculis neque',
                        },
                        {
                            list1: 'Ac tristique libero volutpat at',
                        },
                    ]
                },
                {
                    list: 'Facilisis in pretium nisl aliquet',
                }
            ],
            inline: [
                {
                    list: 'Lorem ipsum',
                },
                {
                    list: 'Phasellus iaculis',
                },
                {
                    list: 'Nulla volutpat',
                },
            ]
        }
    ]
    return (
    
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">Typography</h4>
                {headingsData &&
                <div className="row">
                    <div className="col-lg">
                        <div className="card mb-4">
                            <h5 className="card-header">Headings</h5>
                            <table className="table table-borderless">
                                <tbody>
                                    {headingsData?.map((item, index) => {
                                        const HeadingTag = `h${index + 1}`
                                        return (
                                            <tr>
                                                <td className="align-middle"><small className="text-light fw-semibold">{item?.heading}</small></td>
                                                <td className="py-3">
                                                    {item.title && <HeadingTag className="mb-0">{item?.title}</HeadingTag>}
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>}

                <div className="row">
                    {displayData &
                    <div className="col-lg">
                        <div className="card mb-4">
                            <h5 className="card-header">Display headings</h5>
                            <table className="table table-borderless">
                                <tbody>
                                    {displayData?.map((item, index) => (
                                        <tr>
                                            <td className="align-middle"><small className="text-light fw-semibold">{item?.heading}</small></td>
                                            <td className="py-3">
                                                {item.title && <h1 className={`mb-0 display-${index + 1}`}>{item?.title}</h1>}
                                            </td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>}
                    {paragraphData &&
                    <div className="col-lg">
                        <div className="card mb-4">
                            <h5 className="card-header">Paragraph</h5>
                            <table className="table table-borderless">
                                <tbody>
                                    {paragraphData?.map((item) => (
                                        <tr>
                                            <td className="align-middle"><small className="text-light fw-semibold">{item?.title}</small></td>
                                            <td className="py-3">
                                                <p className="mb-0">
                                                    {item?.para}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>}
                </div>
               
                <div className="row">
                    {blockquoteData &&
                    <div className="col-lg">
                        <div className="card mb-4 mb-lg-0">
                            <h5 className="card-header">Blockquote</h5>
                            {blockquoteData?.map((item) => (
                                <>
                                    <div className="card-body">
                                        <figure className="mt-2">
                                            <blockquote className="blockquote">
                                                {item.title && <p className="mb-0">{item?.title}</p>}
                                            </blockquote>
                                            {item?.figCaption ? <figcaption className="blockquote-footer">
                                                {item?.figCaption} <cite title="Source Title">{item?.sourceTitle}</cite>
                                            </figcaption> : ' '}
                                        </figure>
                                    </div>
                                    <hr className="m-0" />
                                </>
                            ))}


                        </div>
                    </div>}
                    {listData && 
                    <div className="col-lg">
                        <div className="card">
                            <h5 className="card-header">Lists</h5>
                            <div className="card-body">


                                {listData?.map((item) => {
                                    return (
                                        <>
                                            <small className="text-light fw-semibold">Unstyled</small>
                                            <ul className="list-unstyled mt-2">
                                                {item?.unstyled?.map((listItem) => (
                                                    <li>{listItem?.list}
                                                        {listItem?.innerList ?
                                                            <ul>
                                                                {listItem?.innerList?.map((inner) => (
                                                                    <li>{inner?.list1}</li>
                                                                ))}
                                                            </ul> : ''
                                                        }
                                                    </li>
                                                ))}
                                            </ul>
                                            <hr className="m-0" />
                                            <small className="text-light fw-semibold">Inline</small>
                                            <ul className="list-inline mt-2">
                                                {item?.inline?.map((listItem) => (
                                                    listItem && <li className="list-inline-item">{listItem?.list}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )
                                })}
                            </div>


                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}