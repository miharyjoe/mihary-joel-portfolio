import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there ! , I'm - <br></br>{' '}
          <GradientText>Mihary Joel ANDRIAMILANTO</GradientText> 👋
        </>
      }
      description={
        <>
          <strong>Back-End Developer </strong>from Madagascar. <br></br>
          <blockquote>
            "You stop to <strong className="text-cyan-500">LEAD</strong> when
            you stop to
            <strong className="text-cyan-500">LEARN</strong>"
          </blockquote>
        </>
      }
      avatar={
        <img
          className="w-120 h-80"
          src="/assets/images/miharyHd.png"
          alt="Mihary Image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a target="_blank" href="https://twitter.com/miharyjoel">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mihary-jo%C3%ABl-andriamilanto-374609233/"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a target="_blank" href="www.youtube.com/@miharyjoel2832">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
          <a
            target="_blank"
            href="mailto:miharyjoel@gmail.com"
            className="max-h-10 w-11"
          >
            <HeroSocial src="/assets/images/mail-icon.png" alt="Email icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
