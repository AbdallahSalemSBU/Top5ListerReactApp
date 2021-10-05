import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        window.addEventListener('keydown', (event) => {
            let undoReady= false;
            if(event.code === "ControlLeft" || "ControlRight"){
                console.log("You pressed Control");
                undoReady = true;
            }
            if(undoReady && event.code === "KeyZ"){
                this.props.undoCallback();
            }
            else if(undoReady && event.code === "KeyY"){
                this.props.redoCallback();
            }
            this.forceUpdate();
        });
        let undoClass = this.props.tps.hasTransactionToUndo() ? "top5-button" : "top5-button-disabled";
        let redoClass = this.props.tps.hasTransactionToRedo() ? "top5-button" : "top5-button-disabled";
        return (
            <div id="edit-toolbar">
                <div 
                    id='undo-button' 
                    className= {undoClass}
                    onClick = {this.props.undoCallback}>
                        &#x21B6;
                </div>
                <div
                    id='redo-button'
                    className= {redoClass}
                    onClick = {this.props.redoCallback}>
                        &#x21B7;
                </div>
                <div
                    id='close-button'
                    className="top5-button-disabled"
                    onClick = {this.props.closeCallback}>
                        &#x24E7;
                </div>
            </div>
        )
    }
}