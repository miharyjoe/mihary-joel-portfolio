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
        alt="java"
      />
    ),
    Python: (
      <Image
        src="/assets/python.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="java"
      />
    ),
    Spring_boot: (
      <Image
        src="/assets/spring.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="Spring_boot"
      />
    ),
    mdx: (
      <Image
        src="/assets/markdown.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="mdx"
      />
    ),
    Tailwind_CSS: (
      <Image
        src="/assets/tailwindcss-icon.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="Tailwind_CSS"
      />
    ),
    Postgresql: (
      <Image
        src="/assets/postgresql.svg"
        className="h-3 w-3"
        width={3}
        height={3}
        alt="Postgresql"
      />
    ),
  };

  return icons[language] || icons.default;
};
