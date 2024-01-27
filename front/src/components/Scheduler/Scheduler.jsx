import React, { useEffect, useState } from 'react';
import './scheduler.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyScheduler = () => {
  const [appointments, setAppointments] = useState([]);
  const lawyerId = window.location.pathname.split('/')[2];
  console.log("idlawyer", lawyerId);

  useEffect(() => {
    // Effectuez la requête pour récupérer les rendez-vous du lawyer
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/rdv`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ lawyer_id: lawyerId }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Appointments data:', data);  // Ajoutez cette ligne pour le débogage

          // Associer chaque rendez-vous à son client correspondant
          const formattedAppointments = data.appointments.map((appointment, index) => ({
            ...appointment,
            title: `Rendez-vous ${index + 1}`,  // Utilisez le numéro du rendez-vous
            client: data.clients.find(client => client.IDclinet === appointment.client) || {},
          }));

          setAppointments(formattedAppointments);
        } else {
          console.error('Erreur lors de la récupération des rendez-vous du lawyer');
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchAppointments();
  }, []); // Assurez-vous de mettre les dépendances correctes selon votre cas d'utilisation

  return (
    <div className='shedulePage'>
      <div className='eventsTable'>
        <h3>{`Mes Rendez-vous`}</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date du Rendez-vous</th>
              <th>Heure du Rendez-vous</th>
              <th>Nom du Client</th>
              <th>Prénom du Client</th>
              <th>Email du Client</th>
              <th>Numéro de Téléphone du Client</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.title}</td>
                <td>{moment(appointment.appointmentDate).format('LL')}</td>
                <td>{moment(appointment.appointmentDate).format('LT')}</td>
                <td>{appointment.client ? appointment.client.clientLstName : ''}</td>
                <td>{appointment.client ? appointment.client.clientfrstName : ''}</td>
                <td>{appointment.client ? appointment.client.clientEmail : ''}</td>
                <td>{appointment.client ? appointment.client.clientPhoneNumber : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyScheduler;
