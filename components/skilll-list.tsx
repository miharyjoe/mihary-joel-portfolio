import { Skill } from "@/types/skill";
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
    experience: "",
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
        alt="React"
      />
    ),
    color: "text-cyan-500",
    experience: "",
  },
  {
    name: "Next.js",
    type: "framework",
    icon: (
      <Image
        src="/assets/nextjs.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="nextjs"
      />
    ),
    color: "text-black dark:text-white",
    experience: "",
  },
  {
    name: "Javascript",
    type: "language",
    icon: (
      <Image
        src="/assets/javascript.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="javascript"
      />
    ),
    color: "text-green-500",
    experience: "",
  },
  {
    name: "Python",
    type: "language",
    icon: (
      <Image
        src="/assets/python.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="python"
      />
    ),
    color: "text-yellow-500",
    experience: "",
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
        alt="java"
      />
    ),
    color: "text-yellow-500",
    experience: "",
  },
  {
    name: "MongoDB",
    type: "database",
    icon: (
      <Image
        src="/assets/mongo.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="mongo"
      />
    ),
    color: "text-green-600",
    experience: "",
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
        alt="postgresql"
      />
    ),
    color: "text-blue-600",
    experience: "",
  },
  {
    name: "Tailwind CSS",
    type: "framework",
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
    icon: (
      <Image
        src="/assets/docker.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="docker"
      />
    ),
    color: "text-blue-400",
    experience: "",
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
        alt="aws"
      />
    ),
    color: "text-blue-400",
    experience: "",
  },
  {
    name: "GCP",
    type: "tool",
    icon: (
      <Image
        src="/assets/gcp.svg"
        width={6}
        height={6}
        className="h-6 w-6"
        alt="gcp"
      />
    ),
    color: "text-blue-400",
    experience: "",
  },
];
