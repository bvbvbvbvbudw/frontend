import React, { useState } from 'react';

export default function AccordionItem({ title, content, icon }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion__item ${isActive ? 'active' : ''}`}>
      <div className="accordion__header" onClick={handleClick}>
        <img className="accordion__icon" src={icon} alt="" />
        <div className="accordion__title">{title}</div>
      </div>
      <div className="accordion__content">
        <p>{content}</p>
      </div>
    </div>
  );
}
