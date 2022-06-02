import React from 'react';
import NavLink from './NavLink';

class CustomNavbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar sticky-top">
                <div class="container"><a class="navbar-brand d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline logo" href="/"><img class="img-fluid" src="assets/img/stay-safe-sin-letras.svg" width="40em" id="logo" /></a>
                    <ul class="navbar-nav d-flex d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none flex-row mx-auto">
                        {/* <NavLink to="/reportar">
                            <a class="nav-link nav-link-icon" href="reportar" ><i class="fas fa-exclamation"></i></a>
                        </NavLink>
                        <NavLink to="/">
                            <a class="nav-link nav-link-icon" href="/" ><i class="fa fa-map-o"></i></a>
                        </NavLink>
                        <NavLink to="/perfil">
                            <a class="nav-link nav-link-icon" href="perfil" ><i class="far fa-user"></i></a>
                        </NavLink> */}
                        <li class="nav-item nav-item-icon">
                            <NavLink to="/reportar" type='icon'>
                                <i class="fas fa-exclamation"></i>
                            </NavLink>
                        </li>
                        <li class="nav-item nav-item-icon">
                            <NavLink to="/" type='icon'>
                                <i class="fa fa-map-o"></i>
                            </NavLink>
                        </li>
                        <li class="nav-item nav-item-icon">
                            <NavLink to="/perfil" type='icon'>
                                <i class="far fa-user"></i>
                            </NavLink>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-none d-print-inline-flex d-sm-none d-md-inline-flex d-lg-inline-flex d-xl-inline-flex d-xxl-inline-flex flex-row ms-auto">
                        <li class="nav-item">
                            <NavLink to="/reportar">
                                REPORTAR
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/">
                                MAPA
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/perfil">
                                PERFIL
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default CustomNavbar;