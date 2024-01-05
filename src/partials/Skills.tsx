import { GradientText, Section } from 'astro-boilerplate-components';

const Skills = () => (
  <Section
    title={
      <div className="flex items-baseline justify-center text-4xl">
        <GradientText>Skills</GradientText>
      </div>
    }
  >
    <div className="flex flex-col justify-center md:flex-row md:justify-between">
      <div className="mb-8 md:mb-0">
        <h2 className="text-xl">
          <GradientText>Front-end</GradientText>
        </h2>
        <ul className="mt-3">
          <li className="mt-3 flex items-center">
            <img
              src="/assets/images/typescript-icon.svg"
              alt="typescript logo"
              className="h-6 w-6"
            />
            <span className="ml-2">Typescript</span>
          </li>
          <li className="mt-3 flex items-center">
            <img
              src="/assets/images/react-2.svg"
              alt="react logo"
              className="h-6 w-6"
            />
            <span className="ml-2">React</span>
          </li>
          <li className="mt-3 flex items-center">
            <img
              src="/assets/images/tailwindcss-icon.svg"
              alt="tailwind logo"
              className="h-6 w-6"
            />
            <span className="ml-2">Tailwind</span>
          </li>
        </ul>
      </div>
      <div className="mb-8 md:mb-0">
        <h2 className="text-xl">
          <GradientText>Back-end</GradientText>
        </h2>
        <ul className="mt-3">
          <li className="mt-3 flex items-center">
            <img
              src="/assets/images/java.svg"
              alt="java icon"
              className="h-6 w-6"
            />
            <span className="ml-2">Java</span>
          </li>
          <li className="mt-3 flex items-center">
            <img
              src="/assets/images/spring.svg"
              alt="spring icon"
              className="h-6 w-6"
            />
            <span className="ml-2">Spring & spring boot</span>
          </li>
          <li className="mt-3 flex items-center">
            <img
              src="/assets/images/postgresql.svg"
              alt="postgresql icon"
              className="h-6 w-6"
            />
            <span className="ml-2">PostgreSql</span>
          </li>
        </ul>
      </div>
      <div className="mb-8 md:mb-0">
        <h2 className="text-xl">
          <GradientText>Others</GradientText>
        </h2>
        <ul className="mt-3">
          <li className="mt-3 flex items-center">
            <img
              src="/assets/images/aws.svg"
              alt="aws logo"
              className="h-6 w-6"
            />
            <span className="ml-2">AWS</span>
          </li>
          <li className="mt-3 flex items-center">
            <img
              src="/assets/images/github-icon.svg"
              alt="github icon"
              className="h-6 w-6"
            />
            <span className="ml-2">Git & GitHub</span>
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export { Skills };
