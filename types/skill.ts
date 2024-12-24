export interface Skill {
  name: string;
  type: "language" | "framework" | "database" | "tool";
  icon: JSX.Element;
  color: string;
  experience?: string;
}
