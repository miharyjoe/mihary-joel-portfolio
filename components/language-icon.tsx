import Image from "next/image";

export const getLanguageIcon = (language: string) => {
  const icons: Record<string, JSX.Element> = {
    TypeScript: (
      <Image
        src="/assets/typescript-icon.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="typescript"
      />
    ),
    React: (
      <Image
        src="/assets/react-2.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="react"
      />
    ),
    java: (
      <Image
        src="/assets/java.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="react"
      />
    ),
    Spring_boot: (
      <Image
        src="/assets/spring.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="react"
      />
    ),
    mdx: (
      <Image
        src="/assets/markdown.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="react"
      />
    ),
    Tailwind_CSS: (
      <Image
        src="/assets/tailwindcss-icon.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="react"
      />
    ),
    Postgresql: (
      <Image
        src="/assets/postgresql.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="react"
      />
    ),
  };

  return icons[language] || icons.default;
};
