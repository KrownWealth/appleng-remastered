import React from 'react';
import { CardData } from 'types/grid';

type GridProps = {
  cards: CardData[];
};

const renderTitle = (card: CardData) => {
  if (!card.title) return null;

  return (
    <>
      {card.title}
      {card.gridArea === 'bento-2' || card.gridArea === 'bento-3' ? <br /> : null}
      {card.gridArea === 'bento-2' ? (
        <span>
          <span>Liquid Retina XDR</span>&nbsp; display.
        </span>
      ) : card.gridArea === 'bento-4' ? (
        <>
          <span className="battery-gradient-text">14 more hours</span>&nbsp; battery life.5&nbsp;
          <span className="text-textGray">
            (Up to 24 hours total.)<sup className="underline">6</sup>
          </span>
        </>
      ) : null}
    </>
  );
};

const renderSubtitle = (card: CardData) => {
  if (!card.subtitle) return null;

  return card.gridArea === 'bento-3' ? (
    <span className="ai-gradient-text">{card.subtitle}</span>
  ) : (
    <span>
      <sup className='underline'>{card.subtitle}</sup>
    </span>
  );
};

const GridCard: React.FC<GridProps> = ({ cards }) => (
  <section className="bento-grid">
    {cards.map((card, index) => (
      <div
        key={index}
        className={`relative min-h-[${card.minHeightClass}] md:min-h-[${card.maxHeightClass}] w-full h-full rounded-[28px]`}
        style={{
          gridArea: card.gridArea,
          backgroundImage: card.backgroundImage ? `url(${card.backgroundImage})` : undefined,
          backgroundColor: card.backgroundColor,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >

        {!card.backgroundImage && (
          <div className={`relative bg-[#1d1d1f] object-cover h-full w-full rounded-[28px] -z-[1] 
            ${card.gridArea === 'bento-3' ? 'card' : ''}`} />
        )}

        {/* Text Overlay */}
        <div
          className={`absolute bottom-5 md:bottom-10 inset-x-0 flex z-50 pb-8 flex-row gap-4
            md:${card.gridArea === 'bento-1' || card.gridArea === 'bento-4' ? 'flex-col items-start justify-end ' : 'flex-row items-center justify-center gap-4'}
            px-6 md:px-8`}
        >
          <picture>
            <source srcSet={card.iconSrc} type="image/png" media="(max-width:734px)" />
            <source srcSet={card.iconSrc} type="image/png" media="(max-width:1068px)" />
            <source srcSet={card.iconSrc} type="image/png" media="(max-width:0)" />
            <img
              srcSet={card.iconSrc}
              alt="display"
              className="w-[60px] h-[60px] md:w-[100px] md:h-[106px] object-contain"
            />
          </picture>

          <h2 className={`text-white text-[19px]  font-semibold font-sf leading-[1.1]
          ${card.gridArea === 'bento-2' || card.gridArea === 'bento-3' ? "md:text-[21px]" : "md:text-[32px]"}`} >
            {renderTitle(card)}
            {renderSubtitle(card)}
          </h2>
        </div>
      </div>
    ))}
  </section>
);

export default GridCard;
