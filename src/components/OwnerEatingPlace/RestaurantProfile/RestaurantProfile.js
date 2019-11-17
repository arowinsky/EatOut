import React from 'react';
import RestaurantHeader from './Header/Header';
import RestaurantBody from './RestaurantBody/RestaurantBody';

const RestaurantProfile = props => {
   return (
       <div>
           <RestaurantHeader/>
            <RestaurantBody/>
       </div>
   )
}

export default RestaurantProfile;