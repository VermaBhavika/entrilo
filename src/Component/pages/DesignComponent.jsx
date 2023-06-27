import { useState, React } from 'react';
import { Forms } from '../reusableComponents/Forms';
import { List_Group } from '../reusableComponents/List_Group';
import { Cards } from '../reusableComponents/Card';
import { Spinner } from '../reusableComponents/Spinner';
import { Breadcrumbs } from '../reusableComponents/Breadcrumbs';
import { Pills } from '../reusableComponents/Pills';
import { Toast } from '../reusableComponents/Toast';
import { Dropdowns } from '../reusableComponents/Dropdowns';
import { DropZone } from '../reusableComponents/DropZone';
import { ProgressBar } from '../reusableComponents/ProgressBar';
import { Modal } from '../reusableComponents/Modal';
import { BasicTable } from '../reusableComponents/BasicTable';
import { Typography } from '../reusableComponents/Typography';
import { Accordion } from '../reusableComponents/Accordion';
import { Images } from '../reusableComponents/Images';
import { Carousel } from '../reusableComponents/Carousel';
import { Skeleton } from '../reusableComponents/Skeleton';
import { Button } from '../reusableComponents/Button';

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