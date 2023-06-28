import { useState, React } from 'react';
import { Button, Forms, List_Group, Cards, Spinner, Breadcrumbs, Pills, Toast, Dropdowns, DropZone, ProgressBar, Modal, BasicTable, Typography, Accordion, Images, Carousel, Skeleton } from '../reusableComponents/index';
import { Avatar1,card_img } from '../../assests/img/index.js';

export const DesignComponent = () => {
    const [crumbs, setCrumbs] = useState(['Home','Category', 'Sub Category']);
    const selected = crumb =>{
        console.log(crumb);
    }
    return(
        <>  
            
            <Forms />
            <List_Group />
            <Cards mainheading="UI Elements / Cards Basic" alignment="Text alignment" Image={card_img} title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." button="Click Me" />
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
            <Images mainheading="Image Component" Image={card_img} />
            <Carousel />
            <Skeleton image={Avatar1} title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." button="Click Me" />
        </>
    )
}