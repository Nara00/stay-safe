import React from 'react'
// import companyLogo from './img2/stay-safe-sin-letras.svg';


class CustomNavbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
                <div class="container"><a class="navbar-brand d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline logo" href="#"><img class="img-fluid" src="./public/assets/img/stay-safe-logo.svg" width="40em" style={{marginLeft: "13px;"}}/></a>
                    <ul class="navbar-nav d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none flex-row ms-auto">
                        <li class="nav-item"><i class="fas fa-exclamation icon-act"></i></li>
                        <li class="nav-item nav-item-icon"><i class="fa fa-map-o icon-desact"></i></li>
                        <li class="nav-item"><i class="far fa-user icon-desact"></i></li>
                    </ul>
                    <ul class="navbar-nav d-none d-print-inline-flex d-sm-none d-md-inline-flex d-lg-inline-flex d-xl-inline-flex d-xxl-inline-flex flex-row ms-auto">
                        <li class="nav-item"><a class="nav-link" href="pricing.html">mapa</a></li>
                        <li class="nav-item"><a class="nav-link active" href="contact-us.html">REPORTAR</a></li>
                        <li class="nav-item"><a class="nav-link" href="about-us.html">perfil</a></li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default CustomNavbar;