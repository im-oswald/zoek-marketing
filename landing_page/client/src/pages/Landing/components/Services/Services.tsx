import { RoughNotation } from 'react-rough-notation';
import ServiceCard from './ServiceCard';
import { useInView } from '../../../../hooks/useIntersectionObserver';
import { useRef } from 'react';

export default function Services() {
  const serviceRef = useRef(null);

  const observedElements = useInView([serviceRef]);

  return (
    <section
      id="Services Section"
      className="my-20 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl space-y-14 p-5">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-start">
          <h2
            ref={serviceRef}
            data-myproperty="ServiceHeading"
            className="font-newake text-5xl md:text-6xl"
          >
            <RoughNotation
              color="var(--brand-orange-primary)"
              type="highlight"
              show={observedElements?.ServiceHeading?.isInView}
            >
              Services
            </RoughNotation>
          </h2>
          <h3 className="font-poppins">
            At Zoek, we offer a range of services to help businesses grow and
            succeed online. These services include:
          </h3>
        </div>

        <section className="container mx-auto p-10 px-0 md:p-20 md:px-0">
          <div className="grid grid-cols-1 gap-10 antialiased lg:grid-cols-2 2xl:grid-cols-4">
            <ServiceCard
              image="images/search.png"
              number="01."
              title="Search engine optimization"
              desc="SEO, or Search Engine Optimization, enhances your website's visibility in search engine results, like Google and Bing. Our SEO services optimize your site to rank higher, draw more visitors, and increase conversions."
              className=" bg-brand-orange-secondary"
            />
            <ServiceCard
              image="images/stats.png"
              number="02."
              title="Paid Advertising"
              desc="Through our comprehensive paid advertising services, including social, display, and PPC campaigns, we ensure your brand is visible at the right place when customers are ready to buy. Enhance your online presence and drive results with tailored advertising strategies for YOUR brand."
              className="bg-brand-green-primary mt-0 lg:mt-20 "
            />
            <ServiceCard
              image="images/click.png"
              number="03."
              title="
              eCom Website Enhancements"
              desc="We empower business owners by seamlessly integrating payments, invoicing, appointment booking, and more into their web design. With our services, we'll elevate your online store's functionality, making it easy to manage and optimize for ease of use."
              className=" bg-brand-off-white"
            />
            <ServiceCard
              image="images/tabs.png"
              number="04."
              title="Web Design"
              desc="Our versatile web design services offer templates or custom elements to fit any budget and platform. We'll collaborate with you to create an engaging website that represents your brand and attracts your target audience."
              className="bg-brand-yellow mt-0 lg:mt-20"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
