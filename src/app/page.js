import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="app">
      <section className="hero">
        <div className="img">
          <img src="/portraits/port1.jpg"/>
        </div>

        <div className="nav">
          <p>Tour</p>
          <p>Updates</p>
          <p>Contact</p>
          <p>Merch</p>
        </div>

      </section>

      <section className="projects">
        <div className="img">
          <img src="/portraits/port10.jpg"/>
        </div>

        <div className="projects-brief">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis 
            tellus ut hendrerit finibus. Nullam interdum bibendum scelerisque. Sed quis turpis mi. 
            Vivamus vitae pulvinar nisl, venenatis tempus nunc. Vivamus tincidunt eget egestas.
          </p>
        </div>

        <div className="col projects-cover">
          <div className="img">
            <img src="/portraits/port4.jpg"/>
          </div>
        </div>
        <div className="col projects-list">
          <div className="project">
            <h1>Sunrise</h1>
            <p>Apple Music / Spotify / Youtube</p>
          </div>
          <div className="project">
            <h1>Sunrise</h1>
            <p>Apple Music / Spotify / Youtube</p>
          </div>
          <div className="project">
            <h1>Sunrise</h1>
            <p>Apple Music / Spotify / Youtube</p>
          </div>
          <div className="project">
            <h1>Sunrise</h1>
            <p>Apple Music / Spotify / Youtube</p>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="col intro">
          <p>Introduction</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum in ante porttitor, feugiat dolor in, elementum turpis. 
            Donec ut sagittis dolor.
          </p>
        </div>
        <div className="col portrait">
          <div className="portrait-container">
            <img src="/portraits/port7.jpg"/>
          </div>
        </div>
      </section>
      <section className="banner">
        <div className="img">
          <img src="/portraits/port9.jpg"/>
        </div>

        <div className="banner-copy">
          <p>Be the</p>
          <h1>Root Street</h1>
          <p>Join the community, take your sk8, bike or surf-board,
            and let's hit the road together.  
          </p>
          <button>Join the newsletter</button>
        </div>
      </section>
      <section className="footer">
        <div className="col">
          <p>Root Street</p>
          <p>Instagram / TikTok / Discord</p>

          <div className="footer-links">
            <p>Menu</p>
            <h1>Tour</h1>
            <h1>Updates</h1>
            <h1>Merch</h1>
            <h1>Contact</h1>
          </div>

          <p>&copy; Designed by João Saraiva</p>
        </div>

        <div className="col">
          <p>
            Join the newsletter <br /> 
            <button>Subscribe</button>
          </p>

          <div className="shop">
            <div className="img">
              <img src="/portraits/port8.jpg"/>
            </div>
          </div>

          <p>Apple Music / Spotify / Youtube</p>
        </div>
      </section>
    </div>
  );
}
