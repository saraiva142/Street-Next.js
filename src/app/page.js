'use client';

import ParallaxImage from "./ParallaxImage";
import { ReactLenis } from "@studio-freight/react-lenis";



export default function Home() {
  return (
    <ReactLenis root>
    <div className="app">
      <section className="hero">
        <div className="img">
          <ParallaxImage src="/portraits/port1.jpg"/>
        </div>

        <div className="nav">
          <p>João</p>
          <p>Saraiva</p>
          <p>Root</p>
          <p>Street</p>
        </div>

      </section>

      <section className="projects">
        <div className="img">
          <ParallaxImage src="/portraits/port10.jpg"/>
        </div>

        <div className="projects-brief">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis 
            tellus ut hendrerit finibus. Nullam interdum bibendum scelerisque. Sed quis turpis mi. 
            Vivamus vitae pulvinar nisl, venenatis tempus nunc. Vivamus tincidunt eget egestas.
          </p>
        </div>

        <div className="col projects-cover">
          <div className="img">
            <ParallaxImage src="/portraits/port4.jpg"/>
          </div>
        </div>
        <div className="col projects-list">
          <div className="project">
            <h1>STREET</h1>
            <p>Free / Root / Cool</p>
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
            <ParallaxImage src="/portraits/port7.jpg"/>
          </div>
        </div>
      </section>
      <section className="banner">
        <div className="img">
          <ParallaxImage src="/portraits/port9.jpg"/>
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
            <p>João</p>
            <h1>Saraiva</h1>
            <h1>Root</h1>
            <h1>Freedom</h1>
            <h1>Street</h1>
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
              <ParallaxImage src="/portraits/port8.jpg"/>
            </div>
          </div>

          <p>Apple Music / Spotify / Youtube</p>
        </div>
      </section>
    </div>
    </ReactLenis>
  );
}
