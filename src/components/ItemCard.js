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

    handleDragOver = (event) =>{
        event.preventDefault();
        //event.stopPropagation();
        let item = document.getElementById("item-" + this.props.index);
        item.classList.add("top5-item-dragged-to");
        this.setState({
            dragActive: true
        });
    }

    handleDragLeave = (event) => {
        //event.preventDefault();
        let item = document.getElementById("item-" + this.props.index);
        item.classList.remove("top5-item-dragged-to");
        this.setState({
            dragActive: false
        });
    }

    handleDragStart = (event) =>{
        //event.preventDefault();
        event.dataTransfer.setData('text/plain', this.props.index);
        console.log("You are dragging "+ this.props.index);
    }

    handleDragDrop = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        let dragged = event.dataTransfer.getData('text/plain');
        console.log("You have dragged " + dragged + " to " + this.props.index);
        this.props.moveItemCallback(dragged, this.props.index);
        let item = document.getElementById("item-" + this.props.index);
        item.classList.remove("top5-item-dragged-to");
        this.setState({
            dragActive: false
        });
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
            let selectClass = this.dragActive ? "top5-item-dragged-to" : "top5-item";
            return (
                <div
                    id={'item-' + index}
                    key={'item-' + index}
                    draggable = {true}
                    onClick={this.handleClick}
                    onDragOver={this.handleDragOver}
                    onDragStart={this.handleDragStart}
                    onDragLeave={this.handleDragLeave}
                    onDrop={this.handleDragDrop}
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