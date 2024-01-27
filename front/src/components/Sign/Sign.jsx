import React, { useState } from 'react';
import './Sign.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sign() {
    const [formData, setFormData] = useState({
        clientfrstName: '',
        clientLstName: '',
        clientEmail: '',
        clientPhoneNumber: '',
        clientPassword: ''
    });

    const [errors, setErrors] = useState([]);
    const [fieldErrors, setFieldErrors] = useState({});

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
            const response = await fetch('http://127.0.0.1:8000/inscription/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                window.location.href = '/logIn';

                console.log('Inscription réussie');



                // Gérer la réussite de l'inscription, rediriger l'utilisateur ou afficher un message de succès, etc.
            } else {
                const errorData = await response.json();
                if (errorData.message) {
                    setErrors([errorData.message]); // Mettre à jour les erreurs générales
                } else {
                    setErrors([]); // Réinitialiser les erreurs générales
                }
                setFieldErrors(errorData); // Mettre à jour les erreurs de champ spécifiques
                console.error('Erreur lors de l\'inscription:', errorData);

                // Gérer les erreurs d'inscription, afficher un message d'erreur, etc.
            }
        } catch (error) {
            console.error('Erreur:', error);
            // Gérer les erreurs de connexion au serveur, etc.
        }
    };

    return (
        <div>
            <div className="container bootstrap snippets bootdey">
                <div className="row login-page">
                    <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="user-avatar img-thumbnail"/>
                        <h2 className='first'>Let's set you up</h2>
                        {errors.length > 0 && (
                            <div className="error-container">
                                {errors.map((error, index) => (
                                    <p key={index} className="error-message">{error}</p>
                                ))}
                            </div>
                        )}
                        <form role="form" className="ng-pristine ng-valid" method="POST" onSubmit={handleSubmit}>
                            <div className="form-content">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="clientfrstName"
                                        className={`form-control input-underline input-lg ${fieldErrors.clientfrstName ? 'is-invalid' : ''}`}
                                        placeholder="First Name"
                                        value={formData.clientfrstName}
                                        onChange={handleInputChange}
                                    />
                                    {fieldErrors.clientfrstName && (
                                        <div className="invalid-feedback">{fieldErrors.clientfrstName}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="clientLstName"
                                        className={`form-control input-underline input-lg ${fieldErrors.clientLstName ? 'is-invalid' : ''}`}
                                        placeholder="Last Name"
                                        value={formData.clientLstName}
                                        onChange={handleInputChange}
                                    />
                                    {fieldErrors.clientLstName && (
                                        <div className="invalid-feedback">{fieldErrors.clientLstName}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="clientPhoneNumber"
                                        className={`form-control input-underline input-lg ${fieldErrors.clientPhoneNumber ? 'is-invalid' : ''}`}
                                        placeholder="Phone Number"
                                        value={formData.clientPhoneNumber}
                                        onChange={handleInputChange}
                                    />
                                    {fieldErrors.clientPhoneNumber && (
                                        <div className="invalid-feedback">{fieldErrors.clientPhoneNumber}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="clientEmail"
                                        className={`form-control input-underline input-lg ${fieldErrors.clientEmail ? 'is-invalid' : ''}`}
                                        placeholder="Email"
                                        value={formData.clientEmail}
                                        onChange={handleInputChange}
                                    />
                                    {fieldErrors.clientEmail && (
                                        <div className="invalid-feedback">{fieldErrors.clientEmail}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="clientPassword"
                                        className={`form-control input-underline input-lg ${fieldErrors.clientPassword ? 'is-invalid' : ''}`}
                                        placeholder="Password"
                                        value={formData.clientPassword}
                                        onChange={handleInputChange}
                                    />
                                    {fieldErrors.clientPassword && (
                                        <div className="invalid-feedback">{fieldErrors.clientPassword}</div>
                                    )}
                                </div>
                            </div>
                            <button type="submit" className="btn1">
						 Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign;
