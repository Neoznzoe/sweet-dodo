import React from 'react';

const Home = () => {
  return (
    <div className="main-container">
      <div className="home-page">
        <h1>Dashboard</h1>
        <p>Bienvenue sur la page d'accueil de votre application SaaS.</p>
        
        <section>
          <h2>Section Statistiques</h2>
          <p>Ici, vous verrez vos statistiques principales.</p>
        </section>
        
        <section>
          <h2>Section Notifications</h2>
          <p>Ici, vos notifications importantes seront affichées.</p>
        </section>
        
        <section>
          <h2>Section Actualités</h2>
          <p>Les dernières actualités du service apparaîtront ici.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
