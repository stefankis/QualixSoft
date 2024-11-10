import React from 'react';
import './Acasa.css'

const Acasa = () => {

  return (
    <div className="hero-section-home flex justify-between items-center px-20 w-full">
        <div className="w-2/5 flex flex-col gap-5">
            <p style={{fontSize: '84px'}} className="leading-tight text-titles font-bold font-play typing">Building Your <br />Digital Future</p>
            <p style={{fontSize: '18px'}} className="leading-tight text-titles font-semibold font-roboto slide-in-left">Servicii profesionale de Web Development, E-commerce, SEO <br />și Marketing Digital pentru succesul afacerii tale.</p>
        </div>
        <div className="w-3/5 flex flex-row">
            <img src='/src/assets/images/tag-opened.png' alt="Tag Opened Icon" className="object-contain w-1/3 fade-in delay-1" />
            <img src='/src/assets/images/tag-divider.png' alt="Tag Divider Icon" className="object-contain w-1/3 fade-in delay-2" />
            <img src='/src/assets/images/tag-closed.png' alt="Tag Closed Icon" className="object-contain w-1/3 fade-in delay-3" />
        </div>
    </div>
  )
}

export default Acasa;
