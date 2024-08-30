import AllMainFeatureCard from "../components/allMainFeatureCard/AllMainFeatureCard";
import AllQuestionList from "../components/allQuestionList/AllQuestionList";
import BestDeals from "../components/bestDeals/BestDeals";
import HeadRoutePage from "../components/headRoutePage/HeadRoutePage";
import Property from "../components/property/Property";

export default function PropertyDetailsPage() {
  return (
    <>
      <div className="propertyDetailsPage">
        <HeadRoutePage
          thePath="HOME / Property Details"
          namePage="Property Details"
        />
        <Property
          info={{
            srcImage: "/public/images/property/property-01.jpg",
            type: "Appartment",
            street: "54 Mid Street Florida, OR 27001",
            firstText: (
              <p>
                Get{" "}
                <span style={{ fontWeight: "bold" }}>
                  the best villa agency
                </span>{" "}
                HTML CSS Bootrstrap Template for your company website.
                TemplateMo provides you the
                <span style={{ color: "rgba(0, 0, 255, 0.692)" }}>
                  {" "}
                  best free CSS templates{" "}
                </span>
                in the world. please tell your friends about it. Thanks you.
                Cloud bread kogi bitters pitchfork shoreditch tumlr yr
                succulents single-origin coffee schlitz enamel pin you probably
                havent heard of them ugh hella.
              </p>
            ),
            secondText: (
              <p>
                When you look for free CSS templates, you can simply type
                TemplateMo in any search engine website. In addition, you can
                type TemplateMo Digital Marketing, TemplateMo Coporate Layouts,
                etc. Master cardigab hoodie pop-up.
              </p>
            ),
          }}
        >
          <AllQuestionList
            data={[
              {
                id: 0,
                question: <p>Best useful links ?</p>,
                answer: (
                  <p>
                    Dolor{" "}
                    <span style={{ fontWeight: "bold" }}>almesit amet</span>,
                    consectetur adipiscing elit, sed soecnt eiusmod tempor
                    kinfolk tonx seitan crucifix 3 wolf moon bicycle rights
                    keffiyeh snackwave wolf same vice, chillwave vexillologist
                    incididunt ut labore consectetur{" "}
                    <span style={{ color: "#d63384", fontSize: "14px" }}>
                      adipiscing
                    </span>{" "}
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    mangna aliqua.
                  </p>
                ),
              },
              {
                id: 1,
                question: <p>Best useful links ?</p>,
                answer: (
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Est ratione incidunt ipsa eum obcaecati vero et provident
                    dicta! Cupiditate, odit nihil animi nostrum sunt dolorum.
                    Numquam, sit molestiae. Ut, laborum!
                  </p>
                ),
              },
              {
                id: 2,
                question: <p>Best useful links ?</p>,
                answer: (
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Est ratione incidunt ipsa eum obcaecati vero et provident
                    dicta! Cupiditate, odit nihil animi nostrum sunt dolorum.
                    Numquam, sit molestiae. Ut, laborum!
                  </p>
                ),
              },
            ]}
          />
          <AllMainFeatureCard
            data={[
              {
                whatFeature: "Total Flat Space",
                valFeature: "450 m2",
                srcLogo: "../../../public/images/featured/info-icon-01.png",
              },
              {
                whatFeature: "Contract Ready",
                valFeature: "Contract",
                srcLogo: "../../../public/images/featured/info-icon-02.png",
              },
              {
                whatFeature: "Payment Process",
                valFeature: "Payment",
                srcLogo: "../../../public/images/featured/info-icon-03.png",
              },
              {
                whatFeature: "Safety",
                valFeature: "24/7 Under",
                srcLogo: "../../../public/images/featured/info-icon-04.png",
              },
            ]}
          />
        </Property>
        <BestDeals
          introduceData={{
            nameSection: "BEST DEAL",
            title: "Find Your Best Deal Right Now!",
            opetions: ["Appartment", "Villa House", "Penthouse"],
          }}
          dealData={[
            {
              type: "Appartment",
              features: [
                { whatFeature: "Total Flat Space", valFeature: "185 m2" },
                { whatFeature: "Floor number", valFeature: "26th" },
                { whatFeature: "Number of rooms", valFeature: "4" },
                { whatFeature: "Parking Available", valFeature: "Yes" },
                { whatFeature: "Payment Process", valFeature: "Bank" },
              ],
              srcImg: "../../../public/images/deal/deal-01.jpg",
              info: {
                title: "Extra Info About Property",
                firstP:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum, Nesciunt dolorum sequi, ",
                secondP:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum",
                contentBtn: "Schedule a visit",
              },
            },
            {
              type: "Villa House",
              features: [
                { whatFeature: "Total Flat Space", valFeature: "250 m2" },
                { whatFeature: "Floor number", valFeature: "26th" },
                { whatFeature: "Number of rooms", valFeature: "5" },
                { whatFeature: "Parking Available", valFeature: "Yes" },
                { whatFeature: "Payment Process", valFeature: "Bank" },
              ],
              srcImg: "../../../public/images/deal/deal-02.jpg",
              info: {
                title: "Extra Info About Villa",
                firstP:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum, Nesciunt dolorum sequi, ",
                secondP:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum",
                contentBtn: "Schedule a visit",
              },
            },
            {
              type: "Penthouse",
              features: [
                { whatFeature: "Total Flat Space", valFeature: "320 m2" },
                { whatFeature: "Floor number", valFeature: "34th" },
                { whatFeature: "Number of rooms", valFeature: "6" },
                { whatFeature: "Parking Available", valFeature: "Yes" },
                { whatFeature: "Payment Process", valFeature: "Bank" },
              ],
              srcImg: "../../../public/images/deal/deal-03.jpg",
              info: {
                title: "Extra Info About Penthouse",
                firstP:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum, Nesciunt dolorum sequi, ",
                secondP:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum",
                contentBtn: "Schedule a visit",
              },
            },
          ]}
        />
      </div>
    </>
  );
}
