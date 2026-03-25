function Landing() {
  return (
    <div>
    {/* Background Image & Blue Card */}
      <main className="hero-section">
        <div className="welcome-card">
          <h1>WELCOME TO<br/>FLEXISTUDY</h1>
          <div className="divider"></div>
          
          <p>
            Flexi Study Education is an educational consultancy dedicated to helping students 
            achieve their academic and career goals. We provide professional guidance for course 
            selection, university applications, and career planning. Our experienced advisors 
            support students at every stage of their educational journey, offering flexible 
            solutions tailored to individual needs. At Flexi Study, we believe that every 
            student deserves the opportunity to succeed through the right education and guidance.
          </p>

          <button 
            className="btn-dashboard" 
            onClick={() => handleNavigation('Dashboard')}
          >
            Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default Landing;