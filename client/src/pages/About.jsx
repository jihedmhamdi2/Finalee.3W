import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <img 
        src='https://img.freepik.com/photos-gratuite/rendering-3d-maison-bois_23-2151264503.jpg?t=st=1727734840~exp=1727738440~hmac=adf15f7f3f5794ab0a34950d8935f7758456f3df10141980e4e922a122cadb09&w=1060' 
        alt='Beautiful Estate' 
        className='w-full h-auto mb-6 rounded-lg shadow-lg' 
      />

      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Tunisian Estate</h1>
      <p className='mb-4 text-slate-700'>
        Tunisian Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
      </p>
      <p className='mb-4 text-slate-700'>
        Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>
        Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
      </p>
    </div>
  );
}
