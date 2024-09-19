import React from 'react'

export const About = () => {
  return (
    <section className="text-white p-10 md:p-20">
      <div className="w-full">
        {/* Introducción */}
        <h2 className="font-['SpaceGroteskBold'] text-white text-left">Buenos Aires, Argentina (2002)</h2>
        <p className="pt-[20px] pl-10 pr-[20px] font-['SpaceGroteskBold'] text-white text-left text-[30px] md:w-1/2 left-[10%]">
          Hi, I’m Juan Estarli, a passionate web developer with a background in Information Engineering. Currently, I work as a web developer at Teatro Colón, where I focus on building innovative and efficient web solutions.
        </p>

        {/* Experiencia Profesional */}
        <h3 className="text-2xl font-semibold mb-3">Professional Experience</h3>
        <p className="text-lg leading-relaxed mb-5">
          With over X years of experience in web development, I have honed my skills in building responsive and user-centric web applications. As a developer at <span className="font-bold">Kelsus</span>, I focus on delivering top-notch web solutions for businesses. Additionally, as the webmaster of Teatro Colón, I manage and enhance the performance of one of the most prestigious cultural sites in the world.
        </p>

        {/* Habilidades */}
        <h3 className="text-2xl font-semibold mb-3">Skills</h3>
        <ul className="list-disc list-inside mb-5">
          <li>Frontend Development: React, HTML, CSS, JavaScript</li>
          <li>Backend Development: Node.js, Express</li>
          <li>Styling Frameworks: Tailwind CSS, Bootstrap</li>
          <li>Version Control: Git, GitHub</li>
          <li>Database Management: MongoDB, MySQL</li>
        </ul>

        {/* Proyectos Destacados */}
        <h3 className="text-2xl font-semibold mb-3">Featured Projects</h3>
        <p className="text-lg leading-relaxed mb-5">
          I have worked on a variety of projects, from e-commerce platforms to internal tools for companies. Some of my notable projects include:
        </p>
        <ul className="list-disc list-inside mb-5">
          <li><span className="font-bold">Teatro Colón Website:</span> Managed and optimized the performance and SEO of the website, enhancing user experience.</li>
          <li><span className="font-bold">XYZ Project:</span> A web application built using React and Node.js for [specific purpose].</li>
        </ul>

        {/* Información Personal Adicional (Opcional) */}
        <h3 className="text-2xl font-semibold mb-3">Beyond Code</h3>
        <p className="text-lg leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, reading about cryptocurrency, or enjoying outdoor activities. I believe in constant learning and strive to stay updated with the latest trends in technology.
        </p>
      </div>
    </section>
  )
}
