import React from "react";

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.name,
            dragActive: false,
            editActive: false,
        }
    }
    handleClick = (event) => {
        if (event.detail === 2) {
           this.handleToggleEdit(event);
        }
    }

    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }

    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }
    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }
    handleBlur = () => {
        let key = this.props.index;
        let textValue = this.state.text;
        console.log("ItemCard handleBlur: " + textValue);
        this.props.renameItemCallback(key, textValue);
        this.handleToggleEdit();
    }

    handleToggleDrag = (event) =>{
        console.log("dragging");
        /*this.setState({
            dragActive: !this.state.dragActive
        });*/
    }



    render() {
        const { index,
        name } = this.props;

        if(this.state.editActive){
            return(
                <input
                    id={"item-" + index}
                    className='top5-item'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={name}
                />
            )
        }

        else{    
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
                    onDragOver={this.handleToggleDrag}
                    className={selectClass}>
                    <span
                        id={'top5-item-' + index}
                        key={'top5-item-' + index}
                        className="top5-item-text">
                        {name}
                    </span>
                </div>
            );}
    }
}