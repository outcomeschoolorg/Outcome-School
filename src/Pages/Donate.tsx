import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { FaShare } from "react-icons/fa";
import { useState, useEffect } from "react";
import DonateInfo from "../Component/donateInfo";
type Contributor = {
  name: string;
  amount: string;
};

const Donate = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  const [donationType, setDonationType] = useState<"one-time" | "recurring">(
    "one-time",
  );
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");

  useEffect(() => {
    const mockData = [
      { name: "Alice", amount: "$50" },
      { name: "Bob", amount: "$100" },
      { name: "Charlie", amount: "$250" },
    ];
    setContributors(mockData);
  }, []);

  const buttonClass =
    "block w-1/2 whitespace-nowrap text-center font-semibold border-2 border-gray-200 rounded-md px-6 py-3 transition-all duration-200";
  const getAmount = () => {
    return selectedAmount || Number(customAmount) || 0;
  };

  const handleDonate = () => {
    const amount = getAmount();

    if (!amount || amount <= 0) {
      alert("Please select or enter an amount");
      return;
    }

    const baseUrl =
      donationType === "recurring"
        ? "https://buy.stripe.com/recurring_link_here"
        : "https://donate.stripe.com/00w14p0BDfTC0hYd7Y5ZC00";

    window.location.href = baseUrl;
  };
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
            <div className="border-2 border-gray-200 p-4 rounded-md">
              <h1 className="font-bold text-lg text-center pb-4">
                Support Free Tech Training
              </h1>

              {/* AMOUNT */}
              <p className="text-lg pb-4 pt-6">Choose amount</p>

              <div className="grid grid-cols-2 gap-4 p-2">
                {[50, 100, 250, 500].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                    }}
                    className={`p-4 rounded-md border-2 font-semibold transition-all duration-200 ${
                      selectedAmount === amt
                        ? "bg-[#6036E1] text-white border-[#6036E1] shadow-md scale-[1.02]"
                        : "bg-white text-black border-gray-200 hover:border-[#6036E1] hover:text-[#6036E1]"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              {/* CUSTOM AMOUNT */}
              <div className="relative w-full p-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black font-semibold">
                  $
                </span>

                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Any amount"
                  className="w-full pl-8 p-4 font-semibold border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#6036E1]"
                />
              </div>

              {/* DONATE */}
              <div className="flex gap-4">
                <button
                  onClick={handleDonate}
                  className="flex-1 font-semibold text-white rounded-full bg-[#6036E1] p-4 hover:bg-purple-700"
                >
                  Donate 🤍
                </button>

                <button className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
                  <FaShare className="text-purple-700 text-xl" />
                </button>
              </div>
            </div>

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
      <Footer />
    </>
  );
};

export default Donate;
