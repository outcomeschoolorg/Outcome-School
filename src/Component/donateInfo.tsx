const DonateInfo = () => {
  return (
    <div className="p-4 flex-1 lg:flex-[6]">
      <p className="mb-2">
        <span className="font-bold text-purple-700">
          EMPOWERING UNDERSERVED YOUTH'S FUTURE THROUGH TECH
        </span>
      </p>
      <p className="mb-6">
        Outcome School career pathway's programs are made possible by generous
        corporate sponsors, organizations and individual donors.
      </p>
      <h2 className="font-bold">What Your Gift Can Do</h2>
      <div className="mb-4 space-y-4">
        <p>
          {" "}
          <span className="font-bold text-purple-700">$5,000 – </span>Sponsors
          one student through the 48 weeks career pathway program.{" "}
        </p>
        <p>
          <span className="font-bold text-purple-700"> $2,500 – </span>Sponsors
          one student to complete level 1 and the level 2 tech program.
        </p>
        <p>
          {" "}
          <span className="font-bold text-purple-700">$1,000 – </span>Provides
          on-going career support for 5 alumni to secure a tech internship and
          job.
        </p>
        <p>
          {" "}
          <span className="font-bold text-purple-700">$500 – </span>Supports a
          student stipend in our cohort bootcamp
        </p>
        <p>
          {" "}
          <span className="font-bold text-purple-700">$250 – </span>
          Provides a laptop for a student
        </p>
        <p>
          {" "}
          <span className="font-bold text-purple-700">$100 – </span>
          Helps cover student access to our online coding and technology
          platforms.
        </p>

        <h2 className="font-bold">
          Genius is equally distributed. Opportunity is not.
        </h2>
        <div className="mb-4 space-y-4">
          <p>
            Technology is reshaping the workforce and the young people with the
            least access will bear the greatest cost. That is not inevitable. It
            is a choice. Your investment changes it.
          </p>
          <p>
            Underestimated young people do not need to be discovered. They need
            to be resourced. Fund them, and watch what they build.
          </p>
          <p>
            The next generation of technologists and creators are already here.
            They just need you. Invest now — and give them the experience to
            prove it
          </p>

          <p>
            If you are a company or organization interested in partnering at a
            deeper level, please reach out to info@outcomeschool.org and we can
            set up a call to discuss corporate partnerships.
          </p>
        </div>

        <h2 className="font-bold">Give What You Can</h2>
        <div className="mb-4 space-y-4">
          <p>
            Even a small gift makes a big impact. Make a one-time or recurring
            donation to sustain our programs year-round.
          </p>
          <p>
            Together, we can help refugees and migrants in Los Angeles build the
            skills and confidence to thrive in tech, and in life.
          </p>
        </div>
      </div>
    </div>
  );
};
export default DonateInfo;
