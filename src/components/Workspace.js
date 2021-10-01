import React from "react";

export default class Workspace extends React.Component {
    render() {
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id="edit-items">
                        <div id='item-1' draggable="true" class="top5-item"></div>
                        <div id='item-2' draggable="true" class="top5-item"></div>
                        <div id='item-3' draggable="true" class="top5-item"></div>
                        <div id='item-4' draggable="true" class="top5-item"></div>
                        <div id='item-5' draggable="true" class="top5-item"></div>
                    </div>
                </div>
            </div>
        )
    }
}