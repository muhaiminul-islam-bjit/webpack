import React from 'react';

import DownArrow from '../../../images/downarrow.png';
import RockyDashed from '../../../images/rocky-dashed.svg';

interface HeroHeaderProps {
  children?: React.ReactNode;
}

export const HeroHeader = ({}: HeroHeaderProps) => {
  return (
    <div className="m-heroHeader">
      <header>
        <section className="header-content">
          <img
            src={RockyDashed}
            className="rocky-dashed animate-pop-in"
            alt="RockyDashed"
          />
          <h1 className="header-title animate-pop-in">
            Your awesome landing page
          </h1>
          <h3 className="header-subtitle animate-pop-in">
            A useful start for your projects
          </h3>
          <p className="header-button animate-pop-in">
            <a href="#calls-to-action" className="button">
              Get started today
            </a>
          </p>
        </section>
        <section className="header-down-arrow">
          <img src={DownArrow} width="50" alt="cue" />
        </section>
      </header>
    </div>
  );
};
