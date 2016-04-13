/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';

import React from 'react';

const CardButtons = ({handleEdit}) => {
    return (
        <div className="card-buttons-edit">
            <button type="button"
                    className="card-button-select">
                SELECT
            </button>
            <button type="button"
                    className="card-button-view">
                VIEW
            </button>
            <button type="button"
                    onClick={handleEdit}
                    className="card-button-edit">
                EDIT
            </button>
        </div>
    );
};

export default CardButtons;