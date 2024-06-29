import Navbar from "@/components/navbar";
import Landing from "./_components/landing";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Landing />

      </main>

      <div className="p-2 flex flex-col md:flex-row gap-2 items-start justify-center ">
        <div className="  shadow-sm   max-w-md">
          <img src="/acc.jpg" alt="acc" className="md:h-96 rounded-xl"/>
           <h1 className=" font-bold text-xl">SoundMagic Wireless Earbuds</h1>
           <p className=" font-semibold text-sm">$59.99</p>
        </div>
        <div className="  shadow-sm   max-w-md">
          <img src="/landing.avif" alt="acc" className="md:h-96 rounded-xl" />
           <h1>SoundMagic Wireless Earbuds</h1>
           <p>$59.99</p>
        </div>
        <div className="  shadow-sm   max-w-md">
          <img src="/acc.jpg" alt="acc" className="md:h-96 rounded-xl"/>
           <h1>SoundMagic Wireless Earbuds</h1>
           <p>$59.99</p>
        </div>

      </div>
    </div>
  );
}
