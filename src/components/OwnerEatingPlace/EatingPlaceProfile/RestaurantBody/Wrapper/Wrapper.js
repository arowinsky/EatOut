import React from 'react';
import Posts from '../Posts/Posts';
import Menu from '../Menu/Menu';
import Info from '../Info/Info';
import Comments from '../Comments/Comments';

const Wrapper = ({tabItem, active}) => {
   if(tabItem === 'item1') {
       return (
           <div>
               <Posts/>
           </div>
       )
   }
   if(tabItem === 'item2') {
    return (
        <div>
            <Menu/>
        </div>
    )
}
if(tabItem === 'item3') {
    return (
        <div>
            <Info/>
        </div>
    )
}
if(tabItem === 'item4') {
    return (
        <div>
            <Comments/>
        </div>
    )
}
else {
    return (
        <div>
            <Info/>
        </div>
    )
}
}
export default Wrapper;