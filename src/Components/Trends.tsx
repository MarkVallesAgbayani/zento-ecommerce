import image1 from "/src/assets/Images/portrait1.jpg";
import image2 from "/src/assets/Images/portrait2.jpg";
import image3 from "/src/assets/Images/portrait3.jpg";

function Trends() {
  return (
    <header>
      <section>
        <div className="flex items-center justify-between px-6 md:px-12 py-4 mt-6">
          <h1 className="font-bold tracking-wide text-2xl md:text-3xl">
            Today's Trend
          </h1>
          <button className="cursor-pointer bg-[#1E1E1E] text-white px-4 py-2 text-sm md:text-base rounded-full">
            View More
          </button>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap gap-6 justify-center items-center my-8 px-6 md:px-12">
          <img
            src={image1}
            alt="Trend image one"
            className="w-32 h-44 md:w-48 md:h-64 rounded-2xl object-cover shadow-lg"
          />
          <img
            src={image2}
            alt="Trend image two"
            className="w-32 h-44 md:w-48 md:h-64 rounded-2xl object-cover shadow-lg"
          />
          <img
            src={image3}
            alt="Trend image three"
            className="w-32 h-44 md:w-48 md:h-64 rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>
    </header>
  );
}

export default Trends;
