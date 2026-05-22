import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import google from "../assets/images/our-partners/google.png";
import support from "../assets/images/our-partners/support.png";
import cisco from "../assets/images/our-partners/Cisco.jpg";
import EDD from "../assets/images/our-partners/EDD.png";

const partnersData = [
  {
    title: "Educational Partners",
    images: [
      { src: google, className: "h-20 sm:h-19 md:h-25" },
      { src: cisco, className: "h-20 sm:h-19 md:h-25" },
    ],
  },
  {
    title: "Government Partners",
    images: [{ src: EDD, className: "h-28 sm:h-25 md:h-35" }],
  },
  {
    title: "In-Kind Support Partners",
    images: [{ src: support, className: "h-28 sm:h-32 md:h-40" }],
  },
  { title: "Donors", images: [] },
  { title: "Other Partners", images: [] },
];
const OurPartners = () => {
  return (
    <>
      <NavBar />
      <div className="bg-[#f5f7f9] px-4 sm:px-8 md:px-16 py-10 space-y-12 pt-[120px]">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Gratitude for Our Partners
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Outcome School is profoundly grateful for the corporate,
            institutional, government partners and our donors who stand with us.
            Your commitment has fueled our growth and ensured the stability of
            our core operations.
          </p>
        </section>
        {partnersData.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              {section.title}
            </h2>
            {section.images.length > 0 && (
              <div className="flex flex-wrap justify-center items-center gap-10">
                {section.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt="partner logo"
                    className={`${img.className} w-auto object-contain`}
                  ></img>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
      <div></div>
      <Footer />
    </>
  );
};

export default OurPartners;
