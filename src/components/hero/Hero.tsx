import Image from "next/image";

const Hero = () => {
  return (
    <div dir="rtl" className="relative " id="hero">
      <Image
        src="/hero/HeroToursSite2.png"
        alt="תמונת רקע"
        className="w-full h-[500px] md:h-[700px] object-cover "
        width={1600}
        height={800}
      />
      {/* <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-2xl lg:text-4xl font-bold text-center">
        תאילנד בסבבה בלי כאבי ראש מיותרים
      </h1> */}

      <Image
        src="/logo/logo-thailand-sababa1.png"
        alt="logo"
        width={400}
        height={400}
        className="absolute sm:w-[500px] sm:h-[500px] w-[350px] top-[300px] md:top-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Hero;
