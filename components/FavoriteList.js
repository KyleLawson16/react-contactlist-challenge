import React from 'react';
import FavoriteItem from './FavoriteItem';

const FavoriteList = ({ favorites }) => {
    console.log(favorites);
    
    return (
        <div>
            {favorites.map((favorite, index) => {
                return <FavoriteItem key={index} favorite={favorite} />
            })}
        </div>
    )
}

export default FavoriteList