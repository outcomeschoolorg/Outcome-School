import { useState } from "react";
import one from "../assets/images/angel.png";
import zico from "../assets/images/zicoo.png";
import two from "../assets/images/Ellipse.png";
import Kadakia from "../assets/images/Kadakiaa.png";
import Bhakre from "../assets/images/abhilash.png";
import omkar from "../assets/images/omkar.png";
import Jacqueline from "../assets/images/Jacqueline.png";
import Pushpa from "../assets/images/Pushp.png";
import Joseph from "../assets/images/Joseph.png";
import Divya from "../assets/images/Divya.png";
import Frank from "../assets/images/frank.png";
import Yuan from "../assets/images/Yuan.png";
import Madhumitha from "../assets/images/Madhumitha.png";
import Bhatia from "../assets/images/Bhatia.png";
import Vineet from "../assets/images/Vineet.png";
import Nida from "../assets/images/Nida.png";
import Vitor from "../assets/images/Vitor.png";
import Ethan from "../assets/images/Ethan.png";
import Mohamed from "../assets/images/Mohamed.png";
import Shiyun from "../assets/images/Shiyun.png";
import freshman from "../assets/images/freshman.png";
import Manya from "../assets/images/Manya.jpeg";
import BhuvaniRangesh from "../assets/images/BhuvaniRangesh.png";
import ManukMinasyan from "../assets/images/ManukMinasyan.jpg";
import TammyCalderaro from "../assets/images/TammyCalderaro.jpg";
import LydiaIgnatova from "../assets/images/LydiaIgnatova.png";
import CarolynCho from "../assets/images/CarolynCho.jpeg";
import NavBar from "../Component/NavBar";
import Modal from "../Component/Modal";
import Footer from "../Component/Footer";

const OurVolunteer = () => {
  const [openAarushi, setOpenAarushi] = useState(false);
  const [openCourtney, setOpenCourtney] = useState(false);
  const [openZico, setOpenZico] = useState(false);
  const [openOmkar, setOpenOmkar] = useState(false);
  const [openHrishikash, setOpenHrishikash] = useState(false);
  const [openBhakre, setOpenBhakre] = useState(false);
  const [openJacqueline, setOpenJacqueline] = useState(false);
  const [openPushpa, setOpenPushpa] = useState(false);
  const [openJoseph, setOpenJoseph] = useState(false);
  const [openDivya, setOpenDivya] = useState(false);
  const [openFrank, setOpenFrank] = useState(false);
  const [openYuan, setOpenYuan] = useState(false);
  const [openMadhumitha, setOpenMadhumitha] = useState(false);
  const [openBhatia, setOpenBhatia] = useState(false);
  const [openVineet, setOpenVineet] = useState(false);
  const [openNida, setOpenNida] = useState(false);
  const [openVitor, setOpenVitor] = useState(false);
  const [openEthan, setOpenEthan] = useState(false);
  const [openMohamed, setOpenMohamed] = useState(false);
  const [openShiyun, setOpenShiyun] = useState(false);
  const [openfreshman, setOpenfreshman] = useState(false);
  const [openManya, setOpenManya] = useState(false);
  const [openBhuvaniRangesh, setOpenBhuvaniRangesh] = useState(false);
  const [openTammyCalderaro, setOpenTammyCalderaro] = useState(false);
  const [openLydiaIgnatova, setOpenLydiaIgnatova] = useState(false);
  const [openManukMinasyan, setOpenManukMinasyan] = useState(false);
  const [openCarolynCho, setOpenCarolynCho] = useState(false);

  return (
    <>
      <NavBar />
      <div className="bg-white">
        <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">
          <p className="text-black  font-extrabold text-center  text-[45px] mb-5">
            Meet Our Volunteers
          </p>
          <p className="text-black  font-medium  text-[16px] mb-3">
            Meet the Accomplished Instructors at Outcome School
          </p>
          <p className="text-black   font-medium text-[16px]">
            Our instructors specialize across a range of programs
          </p>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto item-center  justify-center mt-4">
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={one}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Aarushi</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenAarushi(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={zico}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  "> Zico Bornelus</p>
                  <p className="font-semibold text-[20px] mt-4 ">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenZico(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Kadakia}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">
                    {" "}
                    Hrishikash Kadakia{" "}
                  </p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenHrishikash(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto item-center  justify-center mt-4">
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={two}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Dr. Courtney Powell</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenCourtney(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Jacqueline}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Jacqueline Koerner</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenJacqueline(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Pushpa}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  "> Pushpa Latha </p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenPushpa(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto item-center  justify-center mt-4">
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={omkar}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Omkar Sonmali</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenOmkar(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Bhakre}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Abhilash Bhakre</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenBhakre(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Joseph}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Joseph Boadi</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenJoseph(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto item-center  justify-center mt-4">
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Divya}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Divya Bhadargade</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenDivya(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Frank}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[45%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Frank Stepanski</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenFrank(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Yuan}
                  alt="one"
                  className="text-center mx-auto rounded-full h-[45%] w-[45%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Yuan Cheng</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenYuan(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto item-center  justify-center mt-4">
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Madhumitha}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">
                    Madhumitha Venkataraman
                  </p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenMadhumitha(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Bhatia}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Bhatia Upasana </p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenBhatia(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Vineet}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Vineet Singh </p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenVineet(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto item-center  justify-center mt-4">
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Nida}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Nida Tazeen</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenNida(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Vitor}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Vitor Domeniquelli</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenVitor(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Ethan}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  "> Ethan Caraway</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenEthan(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto item-center  justify-center mt-4">
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Mohamed}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Mohamed Akmal</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenMohamed(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Shiyun}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]">Shiyun Liu</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenShiyun(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={freshman}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]">Freshman</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenfreshman(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>

              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={Manya}
                  alt="one"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  "> Manya Shree</p>
                  <p className="font-semibold text-[20px] mt-4 ">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenManya(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={BhuvaniRangesh}
                  alt="BhuvaniRangesh"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Bhuvani Rangesh</p>
                  <p className="font-semibold text-[20px] mt-4 ">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenBhuvaniRangesh(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={TammyCalderaro}
                  alt="TammyCalderaro"
                  className="text-center mx-auto rounded-full w-40 h-40 object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Tammy Calderaro</p>
                  <p className="font-semibold text-[20px] mt-4 ">
                    Game Development Instructor
                  </p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenTammyCalderaro(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={ManukMinasyan}
                  alt="ManukMinasyan"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Manuk Minasyan</p>
                  <p className="font-semibold text-[20px] mt-4 ">
                    Game Development Instructor
                  </p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenManukMinasyan(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={LydiaIgnatova}
                  alt="LydiaIgnatova"
                  className="text-center mx-auto rounded-full w-[50%]  object-cover"
                />

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Lydia Ignatova</p>
                  <p className="font-semibold text-[20px] mt-4 ">
                    Robotics Engineering Instructor
                  </p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenLydiaIgnatova(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
              <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
                <img
                  src={CarolynCho}
                  alt=""
                  className="text-center mx-auto rounded-full w-[45%]  object-cover"
                />
                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]  ">Carolyn Cho</p>
                  <p className="font-semibold text-[20px] mt-4">Instructor</p>
                </div>

                <p
                  className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                  onClick={() => setOpenCarolynCho(true)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={openAarushi}
        onClose={() => setOpenAarushi(false)}
        title="Aarushi"
        imageSrc={one}
        linkedinUrl="https://www.linkedin.com/in/aarushi-potdar/"
      >
        <p>
          Hi, I'm Aarushi! I’m a college freshman who’s been coding in HTML and
          CSS for about six years, ever since I took a web design class in
          middle school and kept practicing through high school with small
          projects and class assignments.
        </p>
        <br />
        <p>
          Over time, I also picked up other languages like JavaScript, Java, and
          C#, and I’m currently learning Python and C++.
        </p>
        <br />
        <p>
          I’m really excited to teach because I know what it’s like to learn
          coding step by step, and I want students to feel supported and
          confident as they build their own projects.
        </p>
        <br />
        <p>
          Outside of coding, I love reading and watching K-dramas and movies.
        </p>
      </Modal>

      <Modal
        isOpen={openZico}
        onClose={() => setOpenZico(false)}
        title="Zico Bornelus"
        imageSrc={zico}
        linkedinUrl="https://www.linkedin.com/in/zicobornelus/"
      >
        <p>
          I am a Full-Stack Software Engineer and CompTIA Security+ certified
          professional. With over four years of experience in the industry, I
          have worked on a range of projects, from modernizing legacy systems to
          building secure, scalable applications for fintech and digital
          transformation initiatives.
        </p>
        <br />
        <p>
          My technology journey started exactly where you are right now: with
          HTML and CSS. I got into web development because I was fascinated by
          the ability to build something from nothing. I loved the immediate
          gratification of writing code and watching a blank page transform into
          a structured, visual experience.
        </p>
        <br />
        <p>
          I am here to help you build your foundation because I know exactly
          what it takes to break into this industry. My biggest lesson for
          students is simple: keep working hard and build as many different
          projects as you can. Hands-on experience is the best teacher, and a
          strong portfolio of projects is the best way to prove your skills to
          future employers.
        </p>
      </Modal>

      <Modal
        isOpen={openCourtney}
        onClose={() => setOpenCourtney(false)}
        title="Dr. Courtney Powell"
        imageSrc={two}
        linkedinUrl="https://www.linkedin.com/in/courtney-powell-ph-d-mba-pmp-psm-b9131a8/"
      >
        <p>
          I’m a Software Engineer with a PhD in Computer Science and over 20
          years of experience in software engineering, cloud systems, and Agile
          development. I got into computer science through a deep curiosity
          about how technology works and how software can be used to solve
          real-world problems.
        </p>
        <br />
        <p>
          I’m passionate about empowering the next generation with practical,
          confidence-building computer skills. For me, teaching computer science
          is about more than just code , it’s about developing problem-solving
          skills, creativity, and resilience. In my classes, I will strive to
          create an engaging, inclusive, and supportive environment where
          students feel comfortable asking questions, experimenting, and
          growing.
        </p>
      </Modal>

      <Modal
        isOpen={openOmkar}
        onClose={() => setOpenOmkar(false)}
        title="Omkar Sonmali"
        imageSrc={omkar}
        linkedinUrl="https://www.linkedin.com/in/omkar-sonmali/details/education/"
      >
        <p>
          I’m a UX Designer and Researcher focused on creating user-centered,
          research-driven digital experiences. I was born and raised in Mumbai,
          India and moved to the US for my Masters in HCI.
        </p>
        <br />
        <p>
          I was drawn to into UX/UI Design as I was curious about how people
          interact with technology and how thoughtful design can make complex
          systems feel intuitive and human. My work spans usability testing,
          interaction design, and prototyping across AR/VR, Digital 2D
          interfaces, and accessibility.
        </p>
      </Modal>

      <Modal
        isOpen={openHrishikash}
        onClose={() => setOpenHrishikash(false)}
        title="Hrishikash Kadakia"
        imageSrc={Kadakia}
        linkedinUrl="https://www.linkedin.com/in/hrishikash-kadakia-0a784520a/"
      >
        <p>
          I teach cybersecurity, Python, and web development fundamentals. My
          journey into technology started with curiosity about how my favorite
          websites were built—HTML and CSS gave me the foundation to understand
          the backbone of web creation. From there, Python opened the door to
          building software applications, games, and tools, which I found both
          powerful and exciting.
        </p>
        <br />
        <p>
          My passion for cybersecurity comes from an unusual but fitting source:
          I’ve always loved watching nature documentaries, especially
          predator-versus-prey encounters. Those high-tension moments mirror the
          dynamics of cybersecurity—attackers probing for weaknesses and
          defenders strategizing to protect their territory. That thrill of
          defense and protection is what drew me into this field. I see
          cybersecurity as the digital equivalent of safeguarding an ecosystem,
          ensuring organizations are resilient against ever-emerging threats.
        </p>
        <br />
        <p>
          Today, I combine my technical skills with that passion for defense to
          help students understand not just the mechanics of coding and
          security, but also the mindset of vigilance and adaptability. Whether
          it’s building a secure authentication workflow, writing clean Python
          scripts, or exploring the fundamentals of web design, I aim to make
          learning both practical and inspiring.
        </p>
      </Modal>

      <Modal
        isOpen={openBhakre}
        onClose={() => setOpenBhakre(false)}
        title="Abhilash Bhakre"
        imageSrc={Bhakre}
        linkedinUrl="https://www.linkedin.com/in/bhakre/?external_page=LPC.Immersive&external_control=ViewProfileLink&external_app_instance=90b0998a-e98b-4d23-9648-e1c72b343f53&external_page_instance=a6974f79-64a5-4ed7-93ef-ce691056c03b&experiment=displayLinkedInDataPrebind"
      >
        <p>
          My design philosophy is defined by a career-long transition from
          "Macro to Micro."
        </p>
        <br />
        <p>
          I grew up in a small town in India and began my journey in
          Architecture, where I learned how humans interact with physical
          spaces. Driven by a curiosity for tools and gadgets, I moved to the
          United States to study Industrial and UX/UI Design, shifting my focus
          to the ergonomics of physical products to digital products.
        </p>
        <br />
        <p>
          Today, I am a Senior Product Designer with 7 years of experience
          building digital products for Fintech and Healthcare. I specialize in
          creating intuitive experiences for Desktop, iOS, and Android by
          leveraging AI-tech, user research, and design systems.
        </p>
        <br />
        <p>
          Having led cross-functional teams and mentored designers in agile
          environments, I focus on fostering a transparent, feedback-driven
          process. My goal as an instructor is to help you apply structural,
          human-centered logic to the digital frontiers.
        </p>
      </Modal>

      <Modal
        isOpen={openJacqueline}
        onClose={() => setOpenJacqueline(false)}
        title="Jacqueline Koerner "
        imageSrc={Jacqueline}
        linkedinUrl="
https://www.linkedin.com/in/jacquelinekoerner?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
      >
        <p>
          I’m a product and UX leader with over nine years of experience
          designing and scaling digital products, primarily focused in fintech.
          I’m currently serves as a Group Product Manager on an alternative
          investments platform for financial advisors
        </p>
        <br />
        <p>
          After earning a Bachelor of Science from Cornell University in
          environmental and sustainability sciences, I began my career teaching
          at a charter school in Harlem. Across my experiences, I was
          consistently drawn to systems thinking and to improving how things
          work for people at scale, which ultimately led me to product design.
        </p>
        <br />
        <p>
          I studied graphic design at Parsons, design thinking through IDEO, and
          UI and UX design at Pratt Institute, and i’m Nielsen Norman Group
          certified. I also completed leadership training through programs at
          West Point and Stanford. Passionate about education and people
          leadership, I bring a human-centered approach to my work and I’m
          excited to partner with Outcome School to support students breaking
          into tech.
        </p>
      </Modal>

      <Modal
        isOpen={openPushpa}
        onClose={() => setOpenPushpa(false)}
        title="Pushpa Latha "
        imageSrc={Pushpa}
        linkedinUrl=" https://www.linkedin.com/in/pushpa-latha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
      >
        <p>
          I am a Software Engineer and Python instructor with a strong academic
          and professional background in computer science. I hold a Master’s
          degree in Computer Science, where my interest in programming,
          problem-solving, and object-oriented design really took shape. During
          my studies, I was introduced to Python, and I was drawn to its
          simplicity, readability, and ability to solve problems efficiently.
          That experience is what motivated me to continue working with Python
          professionally.
        </p>
        <br />
        <p>
          I have worked with organizations such as JP Morgan Chase and Zensar
          Technologies, where I used Python extensively for backend development,
          automation, database integration, and building scalable applications
          using advanced OOP principles. My experience also includes working in
          Agile environments, designing APIs, writing clean and maintainable
          code, and collaborating closely with cross-functional teams.
        </p>
        <br />
        <p>
          As an instructor, I am passionate about teaching Python in a clear,
          practical, and structured way. I focus on building strong fundamentals
          while connecting concepts to real-world use cases, so students gain
          both confidence and industry-relevant skills. My goal is to help
          students understand not just how to write code, but how to think like
          software developers and apply Python effectively in their careers.
        </p>
      </Modal>

      <Modal
        isOpen={openJoseph}
        onClose={() => setOpenJoseph(false)}
        title="Joseph Boadi"
        imageSrc={Joseph}
        linkedinUrl="https://www.linkedin.com/in/josephboadi7/"
      >
        <p>
          A soon-to-be Computer Science graduate focused on backend systems. I
          teach Python because I enjoy helping people see that coding isn’t as
          intimidating as it seems once you break it down step by step.
        </p>
        <br />
        <p>
          I value the hands-on approach here. Instead of staying in theory,
          students actually build real projects, and that’s where real
          confidence comes from.
        </p>
      </Modal>

      <Modal
        isOpen={openDivya}
        onClose={() => setOpenDivya(false)}
        title="Divya Bhadargade"
        imageSrc={Divya}
        linkedinUrl="https://www.linkedin.com/in/divya-bhadargade/"
      >
        <p>
          I’m Divya Bhadargade, a UX researcher and designer with a background
          in designing data-intensive and decision-support systems. I’m
          currently pursuing my Master’s in Human-Computer Interaction at Iowa
          State University and have previously worked on UX design projects in
          industrial automation, automotive interfaces, and AI-driven
          applications. My work focuses on understanding user behavior, reducing
          cognitive load, and designing systems that help people make better
          decisions.
        </p>
        <br />
        <p>
          I’m happy to contribute to a community that helps new designers
          develop practical UX skills and confidence. Being involved at this
          stage of my career gives me the opportunity to continually deepen my
          own understanding of design principles. Engaging with topics such as
          user research methods, usability evaluation, and design thinking
          encourages me to reflect on my practice while staying aligned with
          evolving UX approaches. It’s also a meaningful way to support aspiring
          designers as they build strong foundations in user-centered design.
        </p>
      </Modal>

      <Modal
        isOpen={openFrank}
        onClose={() => setOpenFrank(false)}
        title="Frank Stepanski"
        imageSrc={Frank}
        linkedinUrl="https://www.linkedin.com/in/frankstepanski/"
      >
        <p>
          Frank Stepanski. I’ve worked in the tech industry for over 15 years,
          serving as both an Engineering Manager and currently as a Senior
          Engineer. In addition to my industry experience, I’ve spent more than
          7 years teaching in edtech and currently serve as a Senior Adjunct
          Instructor at a local community college.
        </p>
        <br />
        <p>
          One of the most rewarding parts of my career has been mentoring others
          and helping people transition into technology careers. I’m especially
          passionate about supporting individuals who may not normally have
          access to specialized technical education due to financial or
          community barriers. Helping people grow their skills and confidence,
          and seeing them succeed, is something I find incredibly fulfilling.
        </p>
        <br />
        <p>
          Joining Outcome School is exciting because its focus on community,
          mentorship, and practical learning closely aligns with my own values
          around education and supporting career growth in tech.
        </p>
      </Modal>

      <Modal
        isOpen={openYuan}
        onClose={() => setOpenYuan(false)}
        title="Yuan Cheng"
        imageSrc={Yuan}
        linkedinUrl="https://www.linkedin.com/in/yuan-cheng-cherry/"
      >
        <p>
          She is Software Engineering Curriculum Developer. Hi! I’m Yuan, a
          Computer Scientist  at the University of Michigan, Ann Arbor. I’m
          interested in building systems that don’t just work, but can actually
          scale, especially in backend, real-time, and AI-driven
          applications.{" "}
        </p>{" "}
        <br />
        <p>
          A lot of my experience comes from working on systems that handle real
          users and real traffic, where performance, reliability, and latency
          actually matter, and that’s really shaped how I think about
          engineering. What excites me most is not just building systems, but
          understanding how they behave under real-world constraints and helping
          others get there too.
        </p>
        <br />
        <p>
          I enjoy breaking down things like system design, async workflows, or
          debugging into ideas that people can actually use when they build
          something themselves, not just follow along. I also care a lot about
          how people learn. I tend to focus on understanding why something works
          first, and then how to apply it, because that’s what helps people move
          from just learning to actually building. That’s a big reason I wanted
          to join Outcome School. I really like the focus on helping students
          become confident builders, not just learners, and I’m excited to be
          part of a community that values both building and learning
        </p>
      </Modal>

      <Modal
        isOpen={openMadhumitha}
        onClose={() => setOpenMadhumitha(false)}
        title="Madhumitha Venkataraman"
        imageSrc={Madhumitha}
        linkedinUrl="https://www.linkedin.com/in/madhumitha-venkataraman-49aa37129/"
      >
        <p>
          I’m a full stack software engineer with experience building end-to-end
          applications, backend systems, and user-focused solutions using
          technologies like React, Angular, JavaScript, TypeScript, .NET, and
          modern web tools. My career has given me the opportunity to work on
          challenging technical problems, collaborate across teams, and build
          solutions that are both scalable and practical.
        </p>{" "}
        <br />
        <p>
          I truly enjoy teaching and guiding others through their learning
          journey. I know that breaking into tech or growing in this field can
          feel overwhelming without the right support, and I’m passionate about
          making that journey more approachable.
        </p>
        <br />
        <p>
          Outcome School's emphasis on community, mentorship, and practical
          education really resonates with me. Being part of Outcome School
          allows me to combine my technical background with something I care
          deeply about: helping others learn, grow, and succeed.
        </p>{" "}
        <br />
      </Modal>

      <Modal
        isOpen={openBhatia}
        onClose={() => setOpenBhatia(false)}
        title="Bhatia Upasana"
        imageSrc={Bhatia}
        linkedinUrl="https://www.linkedin.com/in/upasana02/"
      >
        <p>
          I’m a Data and Software Engineer with experience in data engineering,
          backend development, and data analysis. I have worked in fast-paced
          environments where I’ve built and contributed to real-world
          applications from the ground up. Along the way, I’ve also had the
          opportunity to mentor and train people through hands-on work, which
          sparked my interest in teaching and simplifying complex tech concepts.
        </p>{" "}
        <br />
        <p>
          I chose to become a Tech Skills Instructor and Curriculum Developer
          because I genuinely enjoy helping others grow especially by breaking
          down technical topics into practical, easy-to-understand learning. I
          believe the right guidance and structured learning can make a huge
          difference in someone’s career journey.
        </p>
        <br />
        <p>
          I joined Outcome School because of its strong focus on practical,
          outcome-driven learning and its mission to truly prepare individuals
          for real-world tech roles. I’m excited to contribute by creating
          meaningful content and supporting learners in building the skills and
          confidence they need to succeed.
        </p>{" "}
        <br />
      </Modal>
      <Modal
        isOpen={openVineet}
        onClose={() => setOpenVineet(false)}
        title="Vineet Singh"
        imageSrc={Vineet}
        linkedinUrl="https://www.linkedin.com/in/vineetsingh44/"
      >
        <p>
          My name is Vineet, and I'm an AI Advisor and Subject Matter Expert at
          Outcome School. By day, I'm a Senior Software Engineer at Qualcomm,
          where I build production-grade AI infrastructure from RAG pipelines
          and vector search systems to intelligent document processing tools
          that help legal and IP teams work smarter and faster. I hold a
          Master's degree from the University of Maryland and have a published
          paper with IEEE, but honestly, what shaped me most as an engineer
          wasn't the classroom it was the years of figuring things out the hard
          way, filling in gaps that no course ever covered.
        </p>{" "}
        <br />
        <p>
          That's exactly why I fell in love with AI Engineering. It sits at the
          edge of what's possible, one of the few fields where you can go from a
          raw idea to something that genuinely thinks, decides, and acts, all
          within a single project. What excites me isn't the hype; it's the
          craft. Designing systems that are reliable, explainable, and actually
          useful for real people. Seeing AI reduce real friction in the real
          world, that's what keeps me motivated every single day.
        </p>
        <br />
        <p>
          I became an advisor because I wanted to be the resource I wished I'd
          had when I was learning. So much of what's out there is either too
          theoretical to apply or too shallow to build anything meaningful with.
          There's a specific kind of satisfaction in closing that gap for
          someone, watching a student write their first working pipeline, or
          have that moment of clarity after days of confusion. Teaching makes me
          a better engineer too. Explaining things forces you to understand them
          at a completely different level.
        </p>{" "}
        <br />
        <p>
          I joined Outcome School because its mission hit close to home. Access
          to quality tech education shouldn't depend on where you were born or
          what your family could afford. Some of the most talented, hungry
          learners I've ever come across didn't have a traditional path into
          tech, they just needed someone to believe in them and give them the
          right tools. Outcome School's commitment to real outcomes over
          credentials is what drew me in
        </p>{" "}
        <br />
      </Modal>

      <Modal
        isOpen={openNida}
        onClose={() => setOpenNida(false)}
        title="Nida Tazeen"
        imageSrc={Nida}
        linkedinUrl="https://www.linkedin.com/in/nida-tazeen/"
      >
        <p>
          I’m a software developer with around five years of experience, mainly
          in integration and building scalable systems. I got into software
          development because I love problem-solving and creating things that
          make processes easier and more efficient.
        </p>{" "}
        <br />
        <p>
          I also enjoy teaching and mentoring, which is why I stepped into an
          instructor role. Helping others learn and grow is really rewarding for
          me.
        </p>
        <br />
        <p>
          I joined Outcome School because I resonate with its mission of
          empowering individuals with practical, industry-relevant skills. I
          appreciate the focus on real-world problem solving and mentorship, and
          I am excited to both contribute and continue learning in such a
          growth-oriented environment.
        </p>
      </Modal>

      <Modal
        isOpen={openVitor}
        onClose={() => setOpenVitor(false)}
        title="Vitor Domeniquelli"
        imageSrc={Vitor}
        linkedinUrl="https://www.linkedin.com/in/vdomeniquelli/?locale=en"
      >
        <p>
          Hi! I'm Vitor, a Robotics Engineer from São Paulo, Brazil. Currently,
          I’m pursuing my Master’s degree, focusing on robot odometry and
          digital twins. I’ve been teaching robotics to high school students in
          my city since 2023, and I’m excited to bring that experience to
          Outcome School!
        </p>{" "}
        <br />
        <p>
          I believe that robotics has the power to transform lives. To me,
          building a robot is an exercise in creativity and an amazing way to
          apply what we learn into something real. I want my students to feel
          proud of their work, empowering them to build things themselves and
          see their ideas come to life.
        </p>
      </Modal>

      <Modal
        isOpen={openEthan}
        onClose={() => setOpenEthan(false)}
        title="Ethan Caraway"
        imageSrc={Ethan}
        linkedinUrl="https://www.linkedin.com/in/ethan-caraway/"
      >
        <p>
          I'm a game developer with over 11 years of experience in everything
          from AAA games to indie games to serious games outside of the
          industry. Whether I'm working on the Call of Duty franchise,
          educational apps, or biomedical research tools, I always bring my game
          development expertise to create accessible, intuitive products.
        </p>{" "}
        <br />
        <p>
          Growing up, I loved playing games like GoldenEye 007, The Legend of
          Zelda: Ocarina of Time, and Heroes of Might & Magic III. When I played
          Hideo Kojima's masterpiece Metal Gear Solid 3, it opened my eyes to
          the unique storytelling and design potential of games as an artistic
          medium. With my degree in Computer Science from Louisiana State
          University, I have sought to explore that potential ever since.
        </p>{" "}
        <br />
        <p>
          Being from a small town in Louisiana, I'm partnering with Outcome
          School to provide the opportunities that I didn't have access to. With
          over 5 years of teaching experience, I strive to help mentor the next
          generation of aspiring game developers.
        </p>
      </Modal>

      <Modal
        isOpen={openMohamed}
        onClose={() => setOpenMohamed(false)}
        title="Mohamed Akmal"
        imageSrc={Mohamed}
        linkedinUrl="https://www.linkedin.com/in/akmal-baig/"
      >
        <p>
          I graduated with a Master’s in Mechanical Engineering from Columbia
          University. I’ve always had a knack for designing and building things,
          and I’ve been fortunate to have people around me who encouraged me to
          bring ideas to life from scratch—like when we turned a simple steel
          shoe rack into a four-wheeled cannon that went on to win a national
          hackathon in India.
        </p>{" "}
        <br />
        <p>
          We did it purely for the joy of creating and for the love of
          mechanical engineering, and that experience really stayed with me. I
          feel it’s now my turn to pass that excitement on, which is why I chose
          to become a Robotics Engineering Instructor and join Outcome School,
          where I can help others discover the same joy in building,
          experimenting, and solving real-world problems.
        </p>
      </Modal>

      <Modal
        isOpen={openShiyun}
        onClose={() => setOpenShiyun(false)}
        title="Shiyun Liu"
        imageSrc={Shiyun}
        linkedinUrl="https://www.linkedin.com/in/shiyun-liu-978b67354"
      >
        <p>
          I’m a product designer based in New York, drawn to the space where
          technology meets human stories. My work is rooted in creating
          experiences that feel intuitive, but also personal design that people
          can actually feel, not just use.
        </p>{" "}
        <br />
        <p>
          I became a designer because I wanted to make things more accessible,
          turning complexity into clarity, and distance into connection.
          Teaching, for me, is a continuation of that. It’s about opening doors,
          sharing ways of thinking, and helping others see that they belong in
          this space.
        </p>{" "}
        <br />
        <p>
          I joined Outcome School as a Product Design curriculum developer and
          instructor because it’s not just about learning—it’s about real
          change. It creates paths where there used to be barriers. I’m excited
          to be part of something that gives people not just skills, but a sense
          of possibility.
        </p>
      </Modal>

      <Modal
        isOpen={openfreshman}
        onClose={() => setOpenfreshman(false)}
        title="Freshman"
        imageSrc={freshman}
        linkedinUrl=""
      >
        <p>
          I am a freshman in high school who is interested in game development
          because I like learning how games are built and creating my own
          projects.
        </p>{" "}
        <br />
        <p>
          I became a Game Development Advisor because I wanted to help others
          learn game development in a fun and clear way. I joined Outcome School
          because I value its project-based approach through hands on learning.
        </p>
      </Modal>
      <Modal
        isOpen={openManya}
        onClose={() => setOpenManya(false)}
        title="Manya Shree"
        imageSrc={Manya}
        linkedinUrl="https://www.linkedin.com/in/manya-vangimalla/?skipRedirect=true"
      >
        <p>
          I'm a Software Engineer and CS graduate student based in California,
          with 5+ years of experience building scalable backend systems, GenAI
          pipelines, and full-stack applications across companies in the US and
          India. I've worked across the stack from distributed microservices in
          Go and Java to LLM integrations and ML infrastructure on AWS and GCP.
        </p>{" "}
        <br />
        <p>
          My journey into teaching started at Wizklub, where I discovered that
          breaking down complex technical concepts for beginners was just as
          rewarding as building production systems. There's a unique
          satisfaction in watching someone grasp and debug their first API call
          it sharpens your own fundamentals while genuinely moving someone
          forward.
        </p>
        <br />
        <p>
          I joined Outcome School because I believe technical education should
          be outcome-driven, not just content-driven. Students deserve
          instruction from engineers who are actively working in the field not
          teaching from textbooks. I want to be that bridge between real-world
          engineering and the classroom.
        </p>
      </Modal>
      <Modal
        isOpen={openBhuvaniRangesh}
        onClose={() => setOpenBhuvaniRangesh(false)}
        title="Bhuvani Rangesh"
        imageSrc={BhuvaniRangesh}
        linkedinUrl="https://www.linkedin.com/in/bhuvanirangesh/"
      >
        <p>
          I don’t believe opportunities are simply handed out—I believe in
          creating them. That belief is what pushed me to join Outcome School,
          where I have the privilege of serving as both a Security Analyst and
          an Instructor.
        </p>
        <br />
        <p>
          In my view, success in cybersecurity comes down to how you think and
          identify threats, and you can only master that if you enjoy the
          challenge. I am excited to bring my real-world experience from the
          operations side into the classroom. I understand that stepping into
          this industry can be scary, and I hope to help my students tackle
          those hurdles by making the learning process engaging, logical,
          and—most importantly—fun.
        </p>
        <br />
        <p>
          My journey into cybersecurity actually started with a childhood love
          for puzzles. That investigative spark is what drove me to become a
          Security Analyst, and it’s what I now bring to my role as an
          Instructor at Outcome School.” Bhuvani Rangesh | LinkedIn Would you
          please add this to the meet the volunteers
        </p>
      </Modal>
      <Modal
        isOpen={openTammyCalderaro}
        onClose={() => setOpenTammyCalderaro(false)}
        title="TammyCalderaro"
        imageSrc={TammyCalderaro}
        linkedinUrl="https://www.linkedin.com/in/tammysgui/"
      >
        <p>
          Games have been part of my life for as long as I can remember.
          Minecraft with my cousins when I was a kid, losing entire evenings to
          Skyrim as a teenager, and somewhere along the way realizing that what
          I loved about games was not just playing them but understanding how
          they were built. Why certain worlds felt alive. That curiosity
          eventually led me to study audiovisual storytelling, then to work at
          Ubisoft on the publishing side of AAA mobile titles, and now to an MA
          in Game Design at Falmouth University in the UK.
        </p>
        <br />
        <p>
          That journey through storytelling formats is actually what brought me
          to game development specifically. Short stories, then film, then
          eventually realizing that games do something no other format does.
          They transform the story into your story. The world responds to you.
          That sense of limitlessness, of being able to create whatever world
          you wish, is what drew me in and what keeps me here.
        </p>
        <br />
        <p>
          Which is exactly why I want to share it. I joined as an instructor
          because I genuinely enjoy supporting people, helping someone build on
          an idea and watching them get excited about what they could make.
          Teaching felt like the most direct way to do that. And Outcome School
          felt like the right place for it. The games industry needs more people
          in it, from more backgrounds, with more perspectives. I want to help
          make that happen
        </p>
      </Modal>
      <Modal
        isOpen={openManukMinasyan}
        onClose={() => setOpenManukMinasyan(false)}
        title="Manuk Minasyan"
        imageSrc={ManukMinasyan}
        linkedinUrl="https://www.linkedin.com/in/manuk-minasyan-6a50771a1/"
      >
        <p>
          I have a background in Computer Science. I am currently focused on
          learning Unreal Engine and improving my game development skills. I
          became interested in game development when I was a kid. I was
          fascinated by the idea that someone could create an entire world from
          nothing. It felt almost like magic to me. What inspired me most was
          the ability to create your own world, characters, and rules, and bring
          ideas to life.
        </p>
        <br />
        <p>
          I joined Outcome School because I wanted to continue learning, improve
          my skills, and be part of a community that helps people grow as game
          developers.
        </p>
        <br />
        <p>
          I am interested in becoming a Game Development Instructor because I
          enjoy helping others learn. I know how challenging it can be to start
          learning game development, and I would like to help new students gain
          confidence and build their own projects.
        </p>
      </Modal>
      <Modal
        isOpen={openLydiaIgnatova}
        onClose={() => setOpenLydiaIgnatova(false)}
        title="Lydia Ignatova"
        imageSrc={LydiaIgnatova}
        linkedinUrl="https://www.linkedin.com/in/lydia-ignatova/"
      >
        <p>
          I’m currently a PhD student at the University of Southern California,
          where I study Human-Robot Interaction, with a focus on socially
          assistive robotics. My research explores how robots can better support
          and interact with people in meaningful ways. Outside of research, I
          love crocheting, going to the gym, bullet journaling, and geocaching.
        </p>
        <br />
        <p>
          Robotics is important to me because it combines creativity,
          engineering, and computing in a way that creates a tangible impact in
          the world. I love seeing how physical systems can help people, solve
          problems, and improve everyday life.
        </p>
        <br />
        <p>
          I wanted to become a Robotics Engineering instructor with the Outcome
          School because I love helping others learn, and I really admire the
          Outcome School's mission to increase access to technological skills.
          I’m excited to be part of a community that empowers students with
          opportunities to grow in robotics.
        </p>
      </Modal>
      <Modal
        isOpen={openCarolynCho}
        onClose={() => setOpenCarolynCho(false)}
        title="Carolyn Cho"
        imageSrc={CarolynCho}
        linkedinUrl="https://www.linkedin.com/in/carolyn-cho/"
      >
        <p>
          My strong passion for product design is rooted in both authenticity
          and empathy. With these two cornerstones in mind, I hope to create
          meaningful impact by ensuring every design decision serves a clear
          purpose, so the final result is not only visually compelling, but
          meaningful as well. To me, product design is important because it
          allows me to understand people’s experiences, solve real problems, and
          create solutions that can positively influence their everyday lives.
        </p>
        <br />
        <p>
          Being a part of UX@Berkeley (Cal’s premier UX-focused student-run
          organization committed to making design accessible to everyone) has
          helped shape the way I approach design today—with intention,
          responsibility, and a deep respect for the voices I am designing for.
          Through this experience, I have learned that thoughtful design is not
          just about creating products, but about advocating for users and
          designing with empathy at every step of the process.
        </p>
        <br />
        <p>
          I have always known that I have a deep love for helping others. I
          believe I am a naturally empathetic person, as I am always open to
          understanding different experiences, perspectives, and the
          complexities that come with them. My experience tutoring sixth-grade
          students in math during high school, along with my current role as
          Internal Vice President of UX@Berkeley, reflects my desire to not only
          contribute meaningfully to the lives of others, but also to create
          environments built on genuine care, trust, support, and growth. These
          experiences are what inspire me to become a Product Design instructor.
          I hope to share my knowledge, help students build confidence in their
          abilities, and show them how design can be a powerful tool for
          creating positive change.
        </p>
        <br />
        <p>
          The Outcome School’s mission to help underserved youth and minorities
          through structured, outcome-based learning strongly reflects my values
          as a designer, student, and human. The opportunity to make design
          education more accessible while empowering students from diverse
          backgrounds is something that deeply resonates with me. As a Product
          Design instructor, I hope not only to gain professional teaching
          experience and continue strengthening my design skills, but most
          importantly, to provide quality guidance to my students through
          respect, empathy, and kindness. I am excited by the opportunity to
          support the next generation of designers and help create a learning
          environment where every student feels valued, capable, and inspired to
          pursue their goals.
        </p>
      </Modal>

      <Footer />
    </>
  );
};

export default OurVolunteer;
