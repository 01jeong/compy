const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        We are a creative and passionate team of designers and developers, dedicated to creating high-quality products that not only look amazing but also make a difference in people's lives. We strive to create products that not only meet customer needs but also inspire them to create their own unique and beautiful lifestyles.
      </p>
    </>
  );
};
export default About;
