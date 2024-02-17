import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meram Belediyesi</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/baskan.jpg'
              text='Meram Tarihçesi'
              label='Tarih'
              path='/kurum'
            />
            <CardItem
              src='images/lokasyonlar.jpeg'
              text='Lokasyonlar'
              label='Mekanlar'
              path='/egitim'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mega1.jpeg'
              text='Meram Gelişim Akademisi React.js'
              label='React.js'
              path='/egitim'
            />
            <CardItem
              src='images/sanat.jpg'
              text='Meram Sanat Eğitimi Videoları'
              label='Sanat'
              path='/egitim'
            />
            <CardItem
              src='images/kafe.jpg'x
              text='Kafeler'
              label='kafe'
              path='/egitim'
            />
            <CardItem
              src='images/abcd3.jpg'
              text='Kütüphane'
              label='Ders'
              path='/egitim'
            />
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;