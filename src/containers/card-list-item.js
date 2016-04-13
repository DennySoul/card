/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveCard} from '../actions';
import CardButtons from '../components/card-buttons';
import CardInfo from '../components/card-info';

/**
 *
 * @param dispatch
 * @returns {{onCardSave: (function(): *)}}
 */
function mapDispatchToProps(dispatch) {
    return {
        onCardSave: (card)=>dispatch(saveCard(card))
    };
}

/**
 *
 */
class Card extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
        this.state = {
            editMode: false,
            cardTitle: this.props.card.title,
            cardTitleError: false
        };
    }

    handleEdit() {
        this.setState({editMode: true});
    }

    handleChange(event) {
        let newTitle = event.target.value;
        this.setState({
            cardTitle: newTitle,
            cardTitleError: newTitle.length < 6
        });
    }

    handleMouseEnter() {
        if (!this.state.editMode) {
            document.querySelector('.card-buttons-edit')
                .style.visibility = 'visible';
        }
    }

    handleMouseLeave() {
        if (!this.state.editMode) {
            document.querySelector('.card-buttons-edit')
                .style.visibility = 'hidden';
        }
    }

    /**
     *
     * @returns {JSX}
     * @description:
     * According to state.editMode, returns
     * editable <input> if editMode is TRUE,
     * or returns <span> if editMode is FALSE
     */
    renderHeader() {
        if (this.state.editMode) {
            return (
                <div>
                    <input type="text"
                           className="card-header-input"
                           onChange={this.handleChange}
                           value={this.state.cardTitle}
                    />
                    {
                        this.state.cardTitleError && <span className="card-header-input-error">
                            Title must be at least 6 characters
                        </span>
                    }
                </div>
            );
        }

        return (
            <span>{this.state.cardTitle}</span>
        );
    }

    /**
     *
     * @returns {JSX}
     * @description:
     * According to editMode state returns
     * <div> with buttons for view mode,
     * or one <button> for edit mode
     */
    renderButtons() {
        if (this.state.editMode) {
            let card = {
                title: this.state.cardTitle,
                inventory_id: this.props.card.inventory_id
            };

            return (
                <div className="card-buttons-save">
                    <button type="button"
                            className="card-button-save"
                            onClick={()=>{
                                this.props.onCardSave(card);
                                this.setState({editMode: false})
                            }}>
                        SAVE
                    </button>
                </div>
            );
        }

        return (<CardButtons handleEdit={this.handleEdit}/>);
    }

    render() {
        let card = this.props.card;

        return (
            <li>
                <div className="card-component-container"
                     onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}>

                    <img title={card.title}
                         className="card-image"
                         src={card.thumbnail_url}
                    />

                    <header className="card-header">
                        <h5>{this.renderHeader()}</h5>
                    </header>

                    <CardInfo artist={card.artist} card={card}/>

                    {this.renderButtons()}
                </div>
            </li>
        );
    }
}

export default connect(null, mapDispatchToProps)(Card);