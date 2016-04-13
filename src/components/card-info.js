/**
 * Created by dchernyh on 13.04.16.
 */
'use strict';

import React from 'react';

const CardInfo = ({artist, card}) => {
    return (
        <section className="card-info">
            <ul>
                <li>{`${artist.first_name} ${artist.last_name}`}</li>
                <li>#ID {card.inventory_id}</li>
                <li>{card.status}</li>
                <li>$ {card.price.toFixed(2)}</li>
            </ul>
        </section>
    );
};

export default CardInfo;