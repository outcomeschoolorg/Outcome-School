import { useState } from "react";
import stu from "../assets/images/imageee.png"
import student from "../assets/images/new.png"
import Noni from "../assets/images/Noni.png"
import Adeyinka from "../assets/images/Adeyinka.png"
import Kennedy from "../assets/images/Kennedy.png"
import Rickiea from "../assets/images/Rickiea.png"
import Micheal from "../assets/images/Michael.png"
import Shawn from "../assets/images/Shawn.png"

const StudentReview = () => {
  const [startIndex, setStartIndex] = useState(0);

  const reviews = [
    {
      text: "“Outcome School’s Python class is well structured and thoughtfully led, creating a strong learning environment. Dr. Powell steers the ship with clear direction and control, while Hrishikash brings deep technical knowledge and consistently pushes the class to perform at a higher level. Pushpa plays a key moderating role, providing timely assistance and support where needed to ensure everyone stays on track.”",
      name: "Jordache Wilson",
      role: "Python Foundation Student",
      image: stu
    },
    {
      text: "“The instructors are really nice and give enough feedback/information in class. They are also willing to help outside of class if you have questions regarding your assignments or about UI/UX Design in general.”",
      name: "Justin H",
      role: "UI/UX Design",
      image: student
    },
    {
      text: "\"The classes are good. Dr. Powell and Mr. Hrishikash are great instructors. The classes are very interactive and hands on so I get a lot of practice.\"",
      name: "Noni Freebourne",
      role: "Python Foundation Student",
      image: Noni
    },
    {
      text: "\"So far I've improved greatly due to the learner centered approach used by the instructors I can boldly say that, every class is a great encounter\"",
      name: "Adeyinka Gideon",
      role: "Python Foundation Student.",
      image: Adeyinka
    },
    {
      text: "\" I am really enjoying this bootcamp. You all are providing us with so much useful information in a way that is easy to understand and not overwhelming. I am getting the hang of Figma and I feel like this is a field that I could see myself breaking into in the future!\"",
      name: "Kennedy Lanier",
      role: "UX/UI Design Student",
      image: Kennedy
    },
    {
      text: "The class is okay, I just feel that we need more detailed training from the instructor instead of him telling us to do the research on other platforms like YouTube, to do the projects correctly. I'm still struggling with the projects that the instructor has us doing.",
      name: "Rickiea Barnes",
      role: "UX/UI Design Student",
      image: Rickiea
    },
    {
      text: "My personal experience has been wonderful. I especially love how the tutors are committed to helping us learn and understand the various concepts in UX. Their patience with us and the level of access to them is really commendable.",
      name: "Michael Pepple",
      role: "UX/UI Design Student",
      image: Micheal
    },
    {
      text: "HTML/CSS class is going great. It is a small class and I love the fact that I can revisit the video recordings after sessions. Simple easy to understand. This is my take on the course.",
      name: "Michael Pepple",
      role: "HTML/CSS Student",
      image: Shawn
    }
  ];

  const visibleReviews = reviews.slice(startIndex, startIndex + 3);
  const maxStartIndex = reviews.length - 3;

  const nextReview = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevReview = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      <div>
        <div className='container px-10 pt-8 pb-20 mx-auto'>
          <p className="text-black text-[40px] lg:text-[45px] mb-10 font-bold lg:text-start text-center">What Our Students Are Saying</p>

          <div className="flex flex-row gap-5 my-5 justify-end">
            <i 
              onClick={prevReview}
              className={`fa-solid fa-arrow-left border border-[#7C33FF] py-3 px-3 rounded-[12px] text ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#7C33FF] hover:text-white'}`}
            ></i>
            <i 
              onClick={nextReview}
              className={`fa-solid fa-arrow-right border border-[#7C33FF] py-3 px-3 rounded-[12px] text ${startIndex === maxStartIndex ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#7C33FF] hover:text-white'}`}
            ></i>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-5 mx-auto items-stretch">
            {visibleReviews.map((review, index) => (
              <div key={startIndex + index} className="border-2 border-[#E8EAF9] shadow-xl rounded-[12px] px-5 py-7 flex flex-col h-full">
                <p className="text-[#444269] flex-grow">
                  {review.text}
                </p>
                <div>
                  <hr className="my-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-[#444269]">{review.role}</p>
                    </div>
                    <img src={review.image} alt={review.name} className=" h-[55px] w-[55px] rounded-[10px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentReview