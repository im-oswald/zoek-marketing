import { RoughNotation } from 'react-rough-notation';
import TestimonialCard from './TestimonialCard';
import { useRef } from 'react';
import { useInView } from '../../../../hooks/useIntersectionObserver';

export default function Testimonials() {
  const testimonialRef = useRef(null);

  const observedElements = useInView([testimonialRef]);

  return (
    <section id="Testimonials Section" className="my-20 flex justify-center">
      <div className="w-full max-w-7xl space-y-14">
        <div className="p-5">
          <h2
            ref={testimonialRef}
            data-myproperty="TestimonialHeading"
            className="font-newake py-2 text-5xl md:text-6xl"
          >
            <RoughNotation
              color="var(--brand-orange-primary)"
              type="highlight"
              show={observedElements?.TestimonialHeading?.isInView}
            >
              Testimonials
            </RoughNotation>
          </h2>
          <h3 className="font-poppins">
            Our Clients Love Us. Don't just take our word for it. See what our
            valued clients have to say about their experiences with our
            services:
          </h3>
        </div>
        <div>
          <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  What our customers say
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-600">
                  We take pride in helping businesses succeed and achieve their
                  digital goals. Read what our satisfied clients have to say
                  about their experiences partnering with us.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-0 xl:mt-20 xl:grid-cols-4">
                <TestimonialCard
                  image="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg"
                  name="John Smith"
                  handle="@johnsmith"
                  quote="Working with Zoek has been a transformative experience. Their expertise in digital services has propelled our online presence to new heights. We couldn't be happier with the results!"
                  hashtag="#DigitalSuccess"
                />
                <TestimonialCard
                  image="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg"
                  name="Sarah Johnson"
                  handle="@sarahj"
                  quote="I can't thank Zoek enough for their exceptional digital services. Our website has seen remarkable growth, and their team's dedication is truly remarkable. Highly recommended!"
                  hashtag="#DigitalMasters"
                />
                <TestimonialCard
                  image="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg"
                  name="Emily Davis"
                  handle="@emilyd"
                  quote="Zoek has been our go-to digital agency, and they've never disappointed. Their strategies are innovative, and our business has thrived under their guidance."
                  hashtag="#DigitalExperts"
                />
                <TestimonialCard
                  image="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg"
                  name="David White"
                  handle="@davidw"
                  quote="We owe our digital success to Zoek. Their team's expertise and dedication are unmatched. Thanks to them, our online presence has never been stronger!"
                  hashtag="#DigitalHeroes"
                />
                <TestimonialCard
                  image="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg"
                  name="Lisa Brown"
                  handle="@lisab"
                  quote="Choosing Zoek was the best decision we made for our business. Their digital services have driven impressive results, and their support is outstanding."
                  hashtag="#DigitalInnovators"
                />
                <TestimonialCard
                  image="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg"
                  name="Michael Taylor"
                  handle="@michaelt"
                  quote="Zoek is the digital agency you can trust. Their strategies are effective, and they truly care about your business's success. Our ROI has never been better!"
                  hashtag="#DigitalPartners"
                />
                <TestimonialCard
                  image="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg"
                  name="Anna Clark"
                  handle="@annaclark"
                  quote="Zoek has exceeded our expectations. Their digital services have transformed our business, and we've seen a significant increase in website traffic and conversions."
                  hashtag="#DigitalTrailblazers"
                />
                <TestimonialCard
                  image="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg"
                  name="Robert Turner"
                  handle="@robertt"
                  quote="My new site is so much faster and easier to work with
                  than my old site. I just choose the page, make the
                  change and click save.Thanks to Zoek!"
                  hashtag="#DigitalGameChangers"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
