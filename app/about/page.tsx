import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4 font-mono">
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-600 ">
        🚀 Fullstack Developer 🌐
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-justify mb-4">
        Greetings! I&apos;m Mihary Joël, a dedicated full-stack developer with a
        strong foundation in modern web technologies and a passion for crafting
        seamless digital experiences from backend to frontend.{" "}
      </p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-justify mb-4">
        💼 With hands-on experience in both frontend and backend development, I
        excel at creating robust and user-friendly applications. My expertise
        spans React, TypeScript, Node.js, and Spring Boot, ensuring end-to-end
        solutions that meet complex requirements. I thrive in Agile
        environments, collaborating directly with clients to deliver exceptional
        results.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-justify mb-4">
        🔧 On the frontend, I specialize in React and TypeScript to create
        dynamic and responsive user interfaces, focusing on intuitive designs
        and exceptional user experiences.
      </p>{" "}
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-justify mb-4">
        ⚙️ On the backend, I bring proficiency in Node.js, Express.js, MongoDB,
        and Spring Boot, building scalable and secure APIs, integrating cloud
        solutions like AWS, and ensuring robust system architecture.
      </p>{" "}
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-justify mb-4">
        📚 My academic journey at the Haute École Informatique provided me with
        expertise in cloud computing, API development, data analysis (using
        Pandas and Power BI), web security, and testing with tools like Jest and
        Cypress. My projects consistently emphasize clean architecture,
        performance, and security.
      </p>{" "}
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-justify mb-4">
        🚀 I’m passionate about innovation and ready to turn your visions into
        reality! Whether it’s architecting complex systems, optimizing
        applications, or exploring the latest in technology, I’m here to
        collaborate and make an impact.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-justify mb-4">
        📬 Feel free to{" "}
        <Link href="/contact" className="text-cyan-950 underline">
          reach out
        </Link>{" "}
        for discussions on innovative projects, potential collaborations, or
        anything related to blockchain development. Looking forward to
        connecting with like-minded professionals!
      </p>
    </div>
  );
}
