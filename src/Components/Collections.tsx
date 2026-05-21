import image1 from "/src/assets/Images/pexels-karola-g-5632397.jpg";
import image2 from "/src/assets/Images/pexels-markus-winkler-1430818-19856616.jpg";
import image3 from "/src/assets/Images/pexels-saravut-vanset-23514839-32831065.jpg";

function Collections() {
  return (
    <>
      <section className="px-6 md:px-12">
        <div>
          <h1 className="font-bold tracking-wide text-2xl mt-5">Collections</h1>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center my-10">
          <div className="w-full max-w-4xl">
            <img
              src={image1}
              className="w-full h-64 md:h-96 object-cover shadow-2xl rounded-lg"
            />
          </div>
          <div className="w-full max-w-4xl">
            <img
              src={image2}
              className="w-full h-64 md:h-96 object-cover shadow-2xl rounded-lg"
            />
          </div>
          <div className="w-full max-w-4xl">
            <img
              src={image3}
              className="w-full h-64 md:h-96 object-cover shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Collections;
