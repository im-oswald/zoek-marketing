import { RoughNotation } from 'react-rough-notation';
import HeroImage from '../../../../assets/HeroImage';
import { useRef } from 'react';
import { useInView } from '../../../../hooks/useIntersectionObserver';

export default function Hero() {
  const heroRef = useRef(null);

  const observedElements = useInView([heroRef]);

  return (
    <section id="Hero Section" className="flex justify-center">
      <div className="flex w-full max-w-7xl flex-col-reverse items-center justify-between py-4 md:flex-row">
        <div className="flex flex-[0.5] flex-col items-center gap-3 md:items-start">
          <h1
            ref={heroRef}
            data-myproperty="HeroHeading"
            className="font-newake p-5 text-center text-6xl leading-[4.25rem] md:text-start"
          >
            <RoughNotation
              type="underline"
              color="var(--brand-purple-primary)"
              animate={true}
              animationDelay={500}
              show={observedElements?.HeroHeading?.isInView}
              strokeWidth={3}
              padding={0}
            >
              {'Amplify '}
            </RoughNotation>
            Your Digital Footprint
          </h1>
          <h3 className="font-poppins p-5 text-center text-xl leading-9 text-slate-500 md:text-start">
            At Zoek Identity, we're your compass in the digital world. Our
            passion is your success. Whether it's your social media strategy, a
            quick website setup or a custom web strategy, we're here for you.
          </h3>
          <button className="mx-5 rounded-lg bg-black px-12 py-5 text-xl text-white hover:bg-black/80 active:bg-black/70 md:p-5 md:text-base">
            Book a consultation
          </button>
        </div>
        <div className="flex flex-[0.5] justify-center">
          <HeroImage className="h-full w-3/4 pb-8 md:min-w-[25rem] md:py-20" />
        </div>
      </div>
    </section>
  );
}
