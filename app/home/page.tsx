import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextGenerateEffectDemo } from "./components/textGenerete";
import SkillsSection from "@/components/skill";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 font-mono">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Hi there !! <br /> I&apos;m Mihary Joël <br /> Andriamilanto.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center font-bold italic">
          Fullstack web developer 🌐
        </p>
        <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          <TextGenerateEffectDemo />
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button size={"lg"}>
            <Link href="/about">About me</Link>
          </Button>
          <Button variant="destructive" size={"lg"}>
            <Link href="/project">My project</Link>
          </Button>
        </div>
      </BackgroundLines>
      <Separator />
      <SkillsSection />
    </>
  );
}
