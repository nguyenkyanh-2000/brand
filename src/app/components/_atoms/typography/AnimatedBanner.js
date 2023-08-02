import SlideIn from "../../../animation/SlideIn";

export const AnimatedBanner = ({ title }) => (
  <SlideIn direction="up">
    <span className="inline-block whitespace-nowrap font-primary font-heavy text-4xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
      {title}
    </span>
  </SlideIn>
);
