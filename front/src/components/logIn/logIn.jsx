import React, { useState } from 'react';
import './logIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Log() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/connexion/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                console.log(responseData.user_type);
                console.log(responseData.message); // Afficher le message de réussite

                // Rediriger l'utilisateur en fonction du type d'utilisateur
                switch (responseData.user_type) {
                    case 'client':
                        //window.location.href = '/';
                        window.location.href = `/landing?clientId=${responseData.user_id}`;
                        break;
                    case 'administrateur':
                        window.location.href = '/adminprofil';
                        break;
                    case 'lawyer':
                        // Redirection vers le profil avocat avec l'ID
                        window.location.href = `/Lawyer-profile/${responseData.user_id}/${responseData.user_type}`;
                        break;
                    default:
                        break;
                }
            } else {
                const errorData = await response.json();
                console.error('Erreur de connexion:', errorData.message);
                // Gérer les erreurs de connexion, afficher un message d'erreur, etc.
            }
        } catch (error) {
            console.error('Erreur:', error);
            // Gérer les erreurs, connexion au serveur, etc.
        }
    };

    return (
        <div>
            <div className="container bootstrap snippets bootdey">
                <div className="row login-page">
                    <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="user-avatar img-thumbnail"/>
                        <h2 className='first'>Let's get you started</h2>
                        <form role="form" className="ng-pristine ng-valid" onSubmit={handleSubmit}>
                            <div className="form-content">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control input-underline input-lg"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control input-underline input-lg"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn1">
                                Log in
                            </button> &nbsp;
                            <h4 className='second'>Don't have an account? </h4><a href=''><h4 className='third' > Join Us now</h4></a>
                            <div className='btns flex-d'>
                                <button  className="btn2"> <a href='/SignUp'>Register </a></button>
                                <button   className="btn3"><a href='/lawyer-sign'>Join as lawyer</a></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Log;
