import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container' style={{ backgroundImage: `url("/images/mevlana.jpeg")` }}>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>MERAM BELEDİYESİ</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to='/egitim' className='btn-mobile'>
            <span className="egitimler-text">Meram Belediyesi Tanıtım</span>
          </Link>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
        >
          İzle <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
