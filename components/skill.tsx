"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";
import { skills } from "./skilll-list";
import { Skill } from "@/types/skill";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const skillsByType = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section className="w-full py-12 font-mono md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Skills & Technologies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my technical expertise and professional skillset
            </p>
          </div>
        </div>

        <TooltipProvider>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 mt-12"
          >
            {Object.entries(skillsByType).map(([type, skills]) => (
              <div key={type} className="space-y-4">
                <h3 className="text-xl font-semibold capitalize">{type}s</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-4">
                                <div className={skill.color}>{skill.icon}</div>
                                <div className="space-y-1">
                                  <h4 className="text-lg font-semibold">
                                    {skill.name}
                                  </h4>
                                  <Badge variant="secondary">
                                    {skill.experience}
                                  </Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.experience} of experience</p>
                        </TooltipContent>
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
}
