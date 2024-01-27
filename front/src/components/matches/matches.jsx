// Matches.jsx
import React from "react";
import { MdReviews } from "react-icons/md";
import "./matches.css";

const Matches = ({ searchResults }) => {
  console.log('Component rendering. Search results:', searchResults);
  

  const queryParams = new URLSearchParams(window.location.search);
const clientId = queryParams.get('clientId');
console.log(clientId);

  return (
    <div id="matches" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Fetches</span>
          <span className="primaryText">Find your best lawyer match</span>
        </div>


        {console.log('Avant la boucle. SearchResults:', searchResults)}
        {searchResults && searchResults.lawyers_info && searchResults.lawyers_info.length > 0 ? (
  <div className="flexColStart r-results">
    {console.log('Dans la boucle')}
    {searchResults.lawyers_info.map((result, i) => (
      <div key={i} className="flexColStart r-card">
        {/* <span className="secondaryText">ID: {result.IDlawyer}</span> */}
        <span className="primaryText">{result.name}</span>
        <span className="secondaryText r-review">
          {/* Ajoutez ici la logique pour afficher les spécialités */}
          <span>{result.specialties.join(', ')}</span>
        </span>
        <span className="secondaryText">{result.detail}</span>
        <a href={`/Lawyer-profile/${result.IDlawyer}/client/${clientId}`}>
          {/* Mettez ici l'image du profil du lawyer */}
          <span className="voirProfil">Voir Profil</span>
        </a>

      </div>
    ))}
  </div>
) : (
  <p className="no-results-message">No results found. Type something</p> 
  
)
}

        {/* <button className="button2">
          <a href="/lawyers">Find your match</a>
        </button> */}
      </div>
    </div>
  );
};

export default Matches;
