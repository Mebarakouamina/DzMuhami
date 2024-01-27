import React, { useState, useEffect } from 'react';
import './signkawyer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignLawyer() {
  const [formData, setFormData] = useState({
    lawyerfrstName: '',
    lawyerLstName: '',
    lawyerPhoneNumber: '',
    lawyerEmail: '',
    lawyerPassword: '',
    careerDescription: '',
    selectedOptions: [],
  });

  const [specialties, setSpecialties] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:8000/get-specialties/')
      .then(response => response.json())
      .then(data => setSpecialties(data))
      .catch(error => console.error('Error fetching specialties:', error));
  }, []);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    const newSelectedOptions = [...formData.selectedOptions];

    if (newSelectedOptions.includes(value)) {
      newSelectedOptions.splice(newSelectedOptions.indexOf(value), 1);
    } else {
      newSelectedOptions.push(value);
    }

    setFormData({ ...formData, selectedOptions: newSelectedOptions });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch('http://127.0.0.1:8000/register-lawyer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lawyerfrstName: formData.lawyerfrstName,
          lawyerLstName: formData.lawyerLstName,
          lawyerPhoneNumber: formData.lawyerPhoneNumber,
          lawyerEmail: formData.lawyerEmail,
          lawyerPassword: formData.lawyerPassword,
          careerDescription: formData.careerDescription,
          selectedOptions: formData.selectedOptions,
        })
      });

      if (response.ok) {
        console.log('Inscription réussie');
        window.location.href = '/logIn';
        // Gérer la réussite de l'inscription
      } else {
        const errorData = await response.json();
        console.error('Erreur lors de l\'inscription:', errorData);
        setFormErrors(errorData);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="container bootstrap snippets bootdey">
        <div className="row signlawyer-page">
          <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="user-avatar img-thumbnail"/>
            <h2 className='first'>Let's set you up</h2>
            <div className="error-messages">
              {Object.keys(formErrors).map((errorKey) => (
                <p key={errorKey}> {formErrors[errorKey]}</p>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="ng-pristine ng-valid">
              <div className="form-content">
                <div className="form-group">
                  <input type="text" name="lawyerfrstName" className="form-control input-underline input-lg" placeholder="First Name" value={formData.lawyerfrstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="lawyerLstName" className="form-control input-underline input-lg" placeholder="Last Name" value={formData.lawyerLstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="lawyerPhoneNumber" className="form-control input-underline input-lg" placeholder="Phone Number" value={formData.lawyerPhoneNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="lawyerEmail" className="form-control input-underline input-lg" placeholder="Email" value={formData.lawyerEmail} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="password" name="lawyerPassword" className="form-control input-underline input-lg" placeholder="Password" value={formData.lawyerPassword} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="careerDescription" className="form-control input-underline input-lg" placeholder="Describe your career" value={formData.careerDescription} onChange={handleChange} />
                </div>

                <div className="form-group">

                  <label className="form-control input-underline input-lg">Add your specialization</label>

                  <div className="specialty-container">
  {specialties.map((specialty) => (
    <div key={specialty.IDspecialty} className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={specialty.IDspecialty}
        name={specialty.IDspecialty}
        value={specialty.IDspecialty}
        onChange={handleCheckboxChange}
      />
      <label className="form-check-label" htmlFor={specialty.IDspecialty}>
        {specialty.specialtyName}
      </label>
    </div>
  ))}
</div>


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

export default SignLawyer;
