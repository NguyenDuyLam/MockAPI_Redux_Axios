import React from "react";


class Menu extends React.Component {
    render() {
        return ( <
            div className = "navbar navbar-default" >
            <
            a className = "navbar-brand" > Title < /a> <
            ul className = "nav navbar-nav" >
            <
            li >
            <
            a > HomePage < /a> <
            /li> <
            li >
            <
            a > Manage Product < /a> <
            /li> <
            /ul> <
            /div>
        );
    }
}

export default Menu;