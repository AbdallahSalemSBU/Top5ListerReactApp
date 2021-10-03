import React from "react";

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dragActive: false,
        }
    }
    handleClick = (event) => {
        if (event.detail === 2) {
           //TODO
        }
    }

    render() {
        const { index,
        name } = this.props;

        let selectClass = "top5-item";
            if (this.dragActive) {
                selectClass = "top5-item-dragged-to";
            }
        return (
            <div
                id={'item-' + index}
                key={'item-' + index}
                draggable = {true}
                onClick={this.handleClick}
                className={selectClass}>
                <span
                    id={'top5-item-' + index}
                    key={'top5-item-' + index}
                    className="top5-item-text">
                    {name}
                </span>
            </div>
        );
    }
}