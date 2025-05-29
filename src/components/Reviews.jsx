import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const reviews = [
    { name: 'Ana G.', text: 'Un viaje inolvidable a Bali gracias a TravelNow. Todo perfecto desde el primer momento.' },
    { name: 'Carlos R.', text: 'Excelente atención al cliente y precios justos. Repetiré sin duda.' },
    { name: 'Lucía M.', text: 'Nunca había viajado tan cómoda. 100% recomendado.' }
  ];

  return (
    <section className="testimonials">
      <h2>Lo que dicen nuestros viajeros</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
