import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import { AiFillStar } from 'react-icons/ai';
import 'react-calendar/dist/Calendar.css';
import './LawyerProfile.css';

const LawyerProfile = ({ }) => {

  const [redirecting, setRedirecting] = useState(false);

  const redirectToLogout = () => {
    setRedirecting(true);
    setTimeout(() => {
      // Rediriger vers la page de connexion après 2 secondes
      // Utilisez Link pour effectuer la redirection
      // Vous pouvez ajuster l'URL selon votre structure de routes
      setRedirecting(false); // Annule le texte 'Log in...' et rend le bouton cliquable
      window.location.href = "/login"; // Redirige vers la page de connexion
    }, 2000);
  };



  const userType = window.location.pathname.split('/')[3];
  const [lawyerInfo, setLawyerInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    bio: '',
    specialties: [],
    IDlawyer:''
  });
  const [reviews, setReviews] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Récupérer l'ID du lawyer depuis l'URL
    const lawyerId = window.location.pathname.split('/')[2];
    const userType = window.location.pathname.split('/')[3];
    const ClientId = window.location.pathname.split('/')[5];
    console.log(lawyerId);
    console.log(userType);

    // Appel à l'API pour récupérer les informations du lawyer
    const fetchLawyerInfo = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/get-lawyer-details/${lawyerId}/`);
        if (response.ok) {
          const data = await response.json();
          setLawyerInfo(data);
        } else {
          console.error('Erreur lors de la récupération des informations du lawyer');
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    // Appel à l'API pour récupérer les commentaires du lawyer
    const fetchLawyerReviews = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/lawyer/${lawyerId}/reviews/`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error('Erreur lors de la récupération des commentaires du lawyer');
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchLawyerInfo();
    fetchLawyerReviews();
  }, []);

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async () => {
    try {
      const lawyerId = window.location.pathname.split('/')[2];
      console.log(lawyerId);

      const ClientId = window.location.pathname.split('/')[4];

      console.log(ClientId);
      const response = await fetch(`http://127.0.0.1:8000/add_comment/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: ClientId,
          lawyer_id: lawyerId,
          comment_content: newComment,
        }),
      });
  
      if (response.ok) {
        // Rafraîchir la liste des commentaires après l'ajout
        fetchLawyerReviews();
        // Réinitialiser le champ de commentaire
        setNewComment('');
      } else {
        console.error('Erreur lors de l\'ajout du commentaire');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };



  const [errorMessage, setErrorMessage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(null);

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);
    setSelectedTime(null); // Réinitialiser l'heure sélectionnée lorsqu'une nouvelle date est sélectionnée
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  //const handleReservation = () => {
    //if (selectedTime) {
      // Logique de réservation
      //setConfirmationMessage(`Appointment scheduled on ${date.toDateString()} at ${selectedTime}`);
      // Réinitialiser les états si nécessaire
      //setDate(new Date());
      //setSelectedTime(null);
    //} else {
      // Gérer le cas où aucune heure n'est sélectionnée
      //alert('Please select an available time.');
    //}
  //};

  const availableTimes = ["9-11", "13-15", "15-17"];

  const handleReservation = async () => {
    if (selectedTime) {
      const [startHour, endHour] = selectedTime.split('-');
      const startDate = new Date(date);
      startDate.setHours(Number(startHour), 0, 0);
  
      const currentDate = new Date();
      if (startDate < currentDate) {
        setErrorMessage('Please select a future date and time.');
        return;
      }

      console.log('Appointment scheduled for:', startDate);
      console.log('Selected time:', selectedTime);

      const lawyerId = window.location.pathname.split('/')[2]; // Récupérer l'ID de l'avocat ici
      const ClientId = window.location.pathname.split('/')[4];
  

      if (!ClientId) {
        // Si l'ID du client est null ou undefined, affichez un message d'erreur et sortez de la fonction
        setErrorMessage('Please log in to make a reservation.');
        return;
      }
    

      // Reste du code de réservation...
      const reservationData = {
        IDclient: ClientId,  // Remplacez ceci par l'ID réel du client
        avocat: lawyerId,    // Remplacez ceci par l'ID réel de l'avocat
        appointmentDate: startDate.toISOString(),
      };
  
      try {
        console.log('Sending request with data:', reservationData);
        const response = await fetch('http://127.0.0.1:8000/appoi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservationData),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          setConfirmationMessage(`Appointment scheduled on ${formatDate(startDate)} at ${selectedTime}`);
          setDate(new Date());
          setSelectedTime(null);
        } else {
          const errorData = await response.json();
          setErrorMessage(`Reservation failed: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Reservation error:', error);
        // setErrorMessage('An error occurred during reservation. Please try again.');
        setErrorMessage('Please log in to make a reservation.');
      }
    } else {
      setErrorMessage('Please select an available time.');
    }
  };
  
  


  return (
    <div className="lawyer-profile-container">
      <div className="profile-info">
        <div className="profile-left">
          <img className="profile-pic" src={lawyerInfo.photo ? lawyerInfo.photo : "/public/téléchargement.png"} alt="Lawyer" />

          {userType !== 'client' && (
              <Link to={redirecting ? "/login" : "#"} className="reserve-btn" onClick={redirectToLogout}>
              {redirecting ? 'Log Out...' : 'Log Out'}
         </Link>
          )}


          <br />
          {userType !== 'client' && (
              <a href="#">modifier la photo de profil</a>
          )}

          <div className="rating">⭐⭐⭐⭐⭐</div>
          

          <div className="information">
            <div>{`${lawyerInfo.first_name} ${lawyerInfo.last_name}`}</div>
            <br />
            <div>{`${lawyerInfo.bio}`}</div>
          </div>
          <div className="info">
            <div className="contact-info-container">
              <div className="phone">{`Phone:      ${lawyerInfo.phone_number}`}</div>
              <div className="phone">{`Email: ${lawyerInfo.email}`}</div>
            </div>
            <div className="contact-info-container">
              <div className="phone">
                Specialities:
                <div className="ph">
                  <ul>
                    {lawyerInfo.specialties.map((specialty, index) => (
                      <li key={index}>{specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lo">
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689210.6449019375!2d0.2925261105509602!3d35.25532113782391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1287211edd4330e3%3A0x8ba2f95154f84ec8!2sAvocat%20Tiaret!5e0!3m2!1sfr!2sdz!4v1706304679320!5m2!1sfr!2sdz" ></iframe>

          
        </div>

        {userType !== 'client' && (
          <a className='rdvVoir' href={`/scheduler/${lawyerInfo.IDlawyer}/lawyer`}>
  {/* Mettez ici l'image du profil du lawyer */}
  <span className='voirRdv'>Voir mes Rendez-vous</span>
</a>
          )}
          </div>

          
        </div>

        
        
        

        

      <div className="buttons">
  {/* Condition pour ne pas afficher le bouton si l'utilisateur est un lawyer */}
  {userType !== 'lawyer' && (

<div className="DateRdv">
        <h4 className='rdvTitr'>Prendre un rendez-vous</h4>
        <form>
          <label>
            <h4 className='rdvTitr'>Date:</h4>
            <input type="date" value={formatDate(date)} onChange={handleDateChange} />
          </label>
          <label>
            <h4 className='rdvTitr'>Select an available time:</h4> 
            <select value={selectedTime} onChange={handleTimeChange}>
              <option value="" disabled>
                -- Select Time --
              </option>
              {availableTimes.map((time, index) => (
                <option className='selectRdv' key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
        </form>


<div>
<button
    className="btnReserve"
    onClick={() => handleReservation()}
    disabled={!selectedTime}
  >
    Reserve Now
  </button>
</div>

{errorMessage && <p className="error-message">{errorMessage}</p>}
      {confirmationMessage && <p className='cofirmsg'>{confirmationMessage}</p>}
      </div>

)}
</div>
      
      
      


        
      </div>
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">Voir les commantaires</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>


          <div className="coments d-flex">
  {reviews.map((review, index) => (
    <div className="testimonial-section-bottom" key={index}>
      <h4>{`${review.client.clientfrstName} ${review.client.clientLstName}`}</h4>
      <div className="testimonials-stars-container">
        {Array.from({ length: review.rateValue }, (_, i) => (
          <AiFillStar key={i} className="star-icon" />
        ))}
      </div>
      <p className='cmntr'>{review.comment}</p>
      
    </div>
  ))}
</div>


          {/* Formulaire pour ajouter un commentaire */}
          {/* Condition pour ne pas afficher le formulaire si l'utilisateur est un lawyer */}
          {userType !== 'lawyer' && (
            <div className="add-comment-form">
              <h2 className='cmntrTit'>Ajouter un commantaire</h2>
              <textarea
                className="add-comment-form"
                style={{ marginTop: '40px' }}
                rows="4"
                cols="50"
                placeholder="Ajouter votre commentaire ici..."
                value={newComment}
                onChange={handleCommentChange}
              ></textarea>
              <br></br>
              <button className='btnCmnt' onClick={handleAddComment} style={{ marginTop: '10px', color: '#000' }}>Ajouter commentaire</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


function formatDate(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
}


export default LawyerProfile;