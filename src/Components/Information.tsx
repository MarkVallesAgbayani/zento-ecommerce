import promo2 from "/src/assets/Images/Promo2.jpg";
import promo1 from "/src/assets/Images/Promo1.jpg";

function Information() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 p-6">
      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-8">
        <img
          src={promo2}
          alt="Information Image One"
          className="w-full md:w-72 rounded-3xl shadow-2xl object-cover"
        />
        <p className="text-2xl md:text-3xl md:max-w-2xl">
          Discover a collection where architectural precision meets street-ready
          comfort. Curated for those who lead, never follow.
        </p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-8">
        <img
          src={promo1}
          alt="Information Image Two"
          className="w-full md:w-64 rounded-3xl shadow-2xl object-cover"
        />
        <p className="text-sm md:text-base md:max-w-lg">
          We bridge the gap between high-fashion silhouettes and the raw energy
          of the city.
        </p>
      </div>
    </section>
  );
}

export default Information;
