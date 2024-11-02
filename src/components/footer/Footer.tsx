import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div dir="rtl" className="bg-lime-100">
      {/* <Image
        src="/footer/footer.png"
        alt="footer"
        className="w-full h-[350px] md:h-[200px] object-cover opacity-60"
        width={1200}
        height={400}
      /> */}

      {/* Overlay for the footer content */}
      <div className="inset-0 -top-10 flex flex-col items-center justify-center py-4">
        <div className="flex flex-col md:flex-row md:gap-2 text-lg">
          <p className="text-center">וואטסאפ לקוחות בתאילנד</p>
          <p className="text-center">6651324874+</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 text-lg text-semibold">
          <p className="text-center">טלפון חירום בתאילנד</p>
          <p className="text-center">6654147845+</p>
        </div>

        <Link href="/about" className="font-semibold text-center">
          אודותינו
        </Link>
        <Link href="/" className="mt-4 text-xl font-semibold text-center">
          <p>לחצו כאן</p>
          <p>השארת פרטים</p>
        </Link>
      </div>

      {/* Copyright text at the bottom */}
      <div className=" bottom-0 w-full text-center py-2">
        <p>&copy; Thailand-Sababa</p>
      </div>
    </div>
  );
};

export default Footer;
