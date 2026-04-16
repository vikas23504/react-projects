import "./App.css";
import robot from "./assets/img/robot.png";

function App() {
  return (
    
    <section className="hero">

      
      <div className="hero-left">
        <h1>
          Recruitment just
          got a <span className="glow">Glow-Up</span>
        </h1>

        <p>
          Stop wasting your time on resume's that all look the same.
          Our AI doesn't just match skills - it understands vibe,
          culture, fit and potential.
        </p>

        <div className="buttons">
          <button className="btn primary">Try For Free</button>
          <button className="btn secondary">See how it Works</button>
        </div>
      </div>

      {/* img wala part */}

      <div className="hero-right">
        <img src={robot} alt="robot" />

        
        <div className="card card1">
          <h3>50K+</h3>
          <p>ACTIVE</p>
        </div>

        <div className="card card2">
          <h3>&lt; 24hr</h3>
          <p>FIRST MATCH</p>
        </div>

        <div className="card card3">
          <h3>98%</h3>
          <p>MATCH</p>
        </div>
      </div>

    </section>
   
  );
}

export default App;