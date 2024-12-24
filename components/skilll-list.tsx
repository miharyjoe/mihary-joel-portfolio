import { Skill } from "@/types/skill";
import { Brain, Database, Globe, Laptop, Server } from "lucide-react";
import Image from "next/image";

export const skills: Skill[] = [
  {
    name: "TypeScript",
    type: "language",
    icon: (
      <Image
        src="/assets/typescript-icon.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="typeScript"
      />
    ),
    color: "text-blue-500",
    experience: "3 years",
  },
  {
    name: "React",
    type: "framework",
    icon: (
      <Image
        src="/assets/react-2.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="typeScript"
      />
    ),
    color: "text-cyan-500",
    experience: "4 years",
  },
  {
    name: "Next.js",
    type: "framework",
    icon: <Globe className="h-6 w-6" />,
    color: "text-black dark:text-white",
    experience: "2 years",
  },
  {
    name: "Javascript",
    type: "language",
    icon: <Server className="h-6 w-6" />,
    color: "text-green-500",
    experience: "3 years",
  },
  {
    name: "Python",
    type: "language",
    icon: <Brain className="h-6 w-6" />,
    color: "text-yellow-500",
    experience: "5 years",
  },
  {
    name: "Java",
    type: "language",
    icon: (
      <Image
        src="/assets/java.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="typeScript"
      />
    ),
    color: "text-yellow-500",
    experience: "5 years",
  },
  {
    name: "MongoDB",
    type: "database",
    icon: <Database className="h-6 w-6" />,
    color: "text-green-600",
    experience: "2 years",
  },
  {
    name: "PostgreSQL",
    type: "database",
    icon: (
      <Image
        src="/assets/postgresql.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="typeScript"
      />
    ),
    color: "text-blue-600",
    experience: "",
  },
  {
    name: "Tailwind CSS",
    type: "tool",
    icon: (
      <Image
        src="/assets/tailwindcss-icon.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="typeScript"
      />
    ),
    color: "text-cyan-400",
  },
  {
    name: "Docker",
    type: "tool",
    icon: <Laptop className="h-6 w-6" />,
    color: "text-blue-400",
    experience: "1 year",
  },
  {
    name: "Aws",
    type: "tool",
    icon: (
      <Image
        src="/assets/aws.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="typeScript"
      />
    ),
    color: "text-blue-400",
    experience: "1 year",
  },
  {
    name: "Gcp",
    type: "tool",
    icon: <Laptop className="h-6 w-6" />,
    color: "text-blue-400",
    experience: "1 year",
  },
];
