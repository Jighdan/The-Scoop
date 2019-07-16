import React, { useState } from 'react';
import { createContainer } from "unstated-next"
import { DndProvider } from 'react-dnd-cjs';
import HTML5Backend from 'react-dnd-html5-backend-cjs';
import SourceMenu from './SourceMenu';
import NewsViewer from './NewsViewer';

const NewsContainer = () => {
    const useSourceState = ( ) => {
        
        
    }

    const _resetMenu = () => {

    }
    const _onClear = () => {

    }
     return(
        <div>
            <DndProvider backend={HTML5Backend}>
                <SourceMenu />
                <NewsViewer />
            </DndProvider>
        </div>
    )
}
export default NewsContainer;
