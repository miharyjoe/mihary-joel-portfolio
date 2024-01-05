import { GradientText, Section } from 'astro-boilerplate-components';

const Skills = () => (
  <Section
    title={
      <div className="flex items-baseline justify-center text-4xl">
        <GradientText>Skills</GradientText>
      </div>
    }
  >
    <div className="flex justify-between">
      <div>
        <h2 className="text-xl">
          <GradientText>Front-end</GradientText>
        </h2>
        <ul>
          <li>Typescript</li>
          <li>React</li>
          <li>Tailwind</li>
        </ul>
      </div>{' '}
      <div>
        <h2 className="text-xl">
          <GradientText>Back-end</GradientText>
        </h2>
        <ul>
          <li>Java</li>
          <li>Spring & spring boot</li>
          <li>PostgreSql</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl">
          <GradientText>Others</GradientText>
        </h2>
        <ul>
          <li>AWS</li>
          <li>Git & GitHub</li>
          <li>DevOps</li>
        </ul>
      </div>
    </div>
  </Section>
);

export { Skills };
