import React from 'react';
import { DndProvider } from 'react-dnd-cjs';
import HTML5Backend from 'react-dnd-html5-backend-cjs';
import SourceMenu from './SourceMenu';
import NewsViewer from './NewsViewer';

const NewsContainer = () => {
    return(
        <div>
            <DndProvider backend={HTML5Backend}>
                <SourceMenu/>
                <NewsViewer/>
            </DndProvider>
        </div>
    )
}
export default NewsContainer;
