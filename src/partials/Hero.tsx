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
          Hi there ! , I'm <GradientText>Mihary Joel ANDRIAMILANTO</GradientText> 👋
        </>
      }
      description={
        <>
          <strong>Back-End  Developer </strong>from Madagascar. {' '} 
          <br></br>
          <blockquote>
            "You stop to <strong className='text-cyan-500'>LEAD</strong> when you stop to
            <strong className='text-cyan-500'>LEARN</strong>"
          </blockquote>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/miharyHd.png"
          alt="Mihary Image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a target="_blank" href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a target="_blank" href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mihary-jo%C3%ABl-andriamilanto-374609233/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a target="_blank" href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
          <a target="_blank" href="mailto:miharyjoel@gmail.com" className="w-11 max-h-10">
            <HeroSocial
              src="/assets/images/mail-icon.png"
              alt="Email icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
