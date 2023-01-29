import React, { Component } from 'react';
import launchViewer from './ViewerFunctions';

class Viewer extends Component {

    componentDidMount(){
        
        var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YmJ1dWNja2tlZXR0L0RCLW9iamVjdC5ydnQ';
        launchViewer('viewerDiv', documentId);
    }
    
    render() {
        return (
            <div style={{position: "absolute", width: "100%", height: "85%"}} id="viewerDiv"/>
        );
    }
}

export default Viewer;