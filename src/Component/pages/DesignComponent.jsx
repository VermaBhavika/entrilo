import { useState, React } from 'react';
import { Button, Forms, List_Group, Cards, Spinner, Breadcrumbs, Pills, Toast, Dropdowns, DropZone, ProgressBar, Modal, BasicTable, Typography, Accordion, Images, Carousel, Skeleton } from '../reusableComponents/index';

export const DesignComponent = () => {
    const [crumbs, setCrumbs] = useState(['Home','Category', 'Sub Category']);
    const selected = crumb =>{
        console.log(crumb);
    }
    return(
        <>  
            
            <Forms />
            <h4 className="fw-bold py-3 mb-4">List groups </h4>
            <List_Group />
            <h4 className="fw-bold py-3 mb-4">Card Design </h4>
            <Cards mainheading="UI Elements / Cards Basic" alignment="Text alignment" title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." button="Click Me" />
            <Spinner mainheading="Spinner" />
            <Breadcrumbs crumbs={crumbs} selected={selected} mainheading="Breadcrumbs" />
            <Pills />
            <Toast />
            <Button/>
            <Dropdowns />
            <DropZone />
            <ProgressBar />
            <Modal />
            <BasicTable />
            <Typography />
            <Accordion />
            <Images mainheading="Image Component" />
            <Carousel />
            <Skeleton title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." button="Click Me" />
        </>
    )
}