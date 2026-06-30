import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { FaShare } from "react-icons/fa";
import { useState, useEffect } from "react";
import DonateInfo from "../Component/donateInfo";
import DonateCard from "../Component/DonateCard";
import DonateFAQ from "../Component/donateFAQ";

type Contributor = {
  name: string;
  amount: string;
};

const Donate = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  useEffect(() => {
    const mockData = [
      { name: "Alice", amount: "$50" },
      { name: "Bob", amount: "$100" },
      { name: "Charlie", amount: "$250" },
    ];
    setContributors(mockData);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <NavBar />
      </nav>
      <div className="container bg-white pt-32">
        {/* <div className="container pt-[9em] py-10 mx-auto items-center "> */}
        <div>
          <p className="text-center text-black leading-relaxed mx-auto w-fit text-[64px] mt-[1em] mb-5 lg:mt-0 font-medium uppercase">
            Donate
          </p>
        </div>
        <div className="flex flex-col lg:flex-row pl-10 pr-10 ">
          <DonateInfo />
          <div className="flex flex-col gap-4 flex-1 lg:flex-[3] mb-6">
            <DonateCard />

            {/* CONTRIBUTORS */}
            <div className="border-2 border-gray-200 p-4 rounded-md">
              <h1 className="font-bold text-lg text-center pb-4">
                Recent Contributors
              </h1>

              <ul className="space-y-2">
                {contributors.length === 0 ? (
                  <li className="text-center text-gray-500">
                    No contributions yet
                  </li>
                ) : (
                  contributors.map((c) => (
                    <li
                      key={`${c.name}-${c.amount}`}
                      className="flex flex-col bg-gray-50 p-3 rounded-md"
                    >
                      <span className="font-medium">{c.name} Contributed</span>

                      <div className="flex items-center gap-2 text-purple-700 font-semibold">
                        💜 {c.amount}
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <DonateFAQ />
      <Footer />
    </>
  );
};

export default Donate;
