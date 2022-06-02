import React from 'react';


function Profile() {
    return (
        <main class="page">
            <section class="position-relative py-4 py-xl-5">
                <div class="container">
                    <div class="row" style={{ marginTop: "1em", marginBottom: "2em" }}>
                        <div class="col" align="center"><img src="assets/img/avatars/avatar.png" style={{ borderRadius: "50%", width:"8em" }}/>
                            <h5 style={{ fontWeight: "bold", textDecoration: "blink", marginTop: "1em"}}>Juana Fernandez</h5>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-5" style={{ borderRadius: "19px" }}>
                                <div class="card-body d-flex flex-column align-items-center">
                                    <div class="row options">
                                        <div class="col-2 d-flex align-items-center" style={{ padding: "0px" }}>
                                            <div class="bs-icon-sm bs-icon-circle bs-icon my-4" ><i class="far fa-user"></i></div>
                                        </div>
                                        <div class="col d-flex align-items-center">
                                            <p style={{ margin: "0px" }}>Información de perfil</p>
                                        </div>
                                        <div class="col-1 d-flex align-items-center" style={{ padding: "0px"}}><i class="fas fa-chevron-right"></i></div>
                                    </div>
                                    <div class="row options">
                                        <div class="col-2 d-flex align-items-center" style={{ padding: "0px"}}>
                                            <div class="bs-icon-sm bs-icon-circle bs-icon my-4" ><i class="far fa-clock"></i></div>
                                        </div>
                                        <div class="col d-flex align-items-center">
                                            <p style={{ margin: "0px" }}>Actividad</p>
                                        </div>
                                        <div class="col-1 d-flex align-items-center" style={{ padding: "0px"}}><i class="fas fa-chevron-right"></i></div>
                                    </div>
                                    <div class="row options">
                                        <div class="col-2 d-flex align-items-center" style={{ padding: "0px"}}>
                                            <div class="bs-icon-sm bs-icon-circle bs-icon my-4" ><svg class="bi bi-gear" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path>
                                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path>
                                            </svg></div>
                                        </div>
                                        <div class="col d-flex align-items-center">
                                            <p style={{margin: "0px"}}>Configuración</p>
                                        </div>
                                        <div class="col-1 d-flex align-items-center" style={{ padding: "0px"}}><i class="fas fa-chevron-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Profile;