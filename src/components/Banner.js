import React from "react";
import EditToolbar from "./EditToolbar";

export default class Banner extends React.Component {
    render() {
        const { title, closeCallback, undoCallback, redoCallback, tps} = this.props;
        return (
            <div id="top5-banner">
                {title}
                <EditToolbar 
                tps = {tps}
                closeCallback = {closeCallback}
                undoCallback = {undoCallback}
                redoCallback = {redoCallback}/>
            </div>
        );
    }
}