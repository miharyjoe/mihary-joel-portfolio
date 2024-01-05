import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Projects</GradientText>
        </div>
        <div className="text-sm">
          <a
            href="https://github.com/miharyjoe?tab=repositories"
            target="_blank"
          >
            View all Projects →
          </a>
        </div>
      </div>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Reddit Clone"
        description="A simple spring boot Reddit Clone"
        link="https://github.com/miharyjoe/spring-reddit-clone"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Angular</Tags>
            <Tags color={ColorTags.LIME}>Spring boot</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Job App"
        description="An application mobile made with react native for looking job using the job search in rapid api"
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React native</Tags>
            <Tags color={ColorTags.EMERALD}>mobile app</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Image To Pdf Api"
        description="A simple Api rest when we upload images and convert them in pdf"
        link="https://github.com/miharyjoe/Image-To-Pdf-Api"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Spring boot</Tags>
            <Tags color={ColorTags.INDIGO}>Java</Tags>
            <Tags color={ColorTags.ROSE}>API</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
