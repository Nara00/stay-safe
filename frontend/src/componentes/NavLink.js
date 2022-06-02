import React from 'react';

const NavLink = (props) => {
    var isActive = (window.location.pathname === props.to);
    console.log(window.location.pathname)
    console.log(props.to)
    if (isActive){
        if(props.type === 'icon')
            var className = 'nav-link active nav-link-icon';
        else
            var className = 'nav-link active';}
    else{
        if(props.type === 'icon')
        var className = 'nav-link nav-link-icon';
    else
        var className = 'nav-link ';}

    return(
        <a href={props.to} className={className} >
            {props.children}
        </a>
    );
}


export default NavLink;