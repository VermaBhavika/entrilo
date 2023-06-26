import { Forms } from './Forms';
import { List_Group } from './List_Group';
import { Cards } from './Card';
import { Spinner } from './Spinner';
import { Breadcrumbs } from './Breadcrumbs';
import { Pills } from './Pills';
import { Toast } from './Toast';
import { Dropdowns } from './Dropdowns';
import { DropZone } from './DropZone';
import { ProgressBar } from './ProgressBar';
import { Modal } from './Modal';
import { BasicTable } from './BasicTable';
import { Typography } from './Typography';
import { Accordion } from './Accordion';
import { Images } from './Images';
import { Carousel } from './Carousel';
import { Skeleton } from './Skeleton';

export const DesignComponent = () => {
    return(
        <>  
            
            <Forms />
            <List_Group />
            <Cards />
            <Spinner />
            <Breadcrumbs />
            <Pills />
            <Toast />
            <Dropdowns />
            <DropZone />
            <ProgressBar />
            <Modal />
            <BasicTable />
            <Typography />
            <Accordion />
            <Images/>
            <Carousel />
            <Skeleton />
        </>
    )
}