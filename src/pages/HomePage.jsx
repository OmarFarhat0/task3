import Featured from "../components/featured/Featured";
import Slider from "../components/slider/Slider";
import Properties from "../components/properties/Properties";
import BestDeals from "../components/bestDeals/BestDeals";
import VideoView from "../components/videoView/VideoView";
import PreviousAchievementCard from "../components/previousAchievementCard/PreviousAchievementCard";
import AllQuestionList from "../components/allQuestionList/AllQuestionList";
import AllMainFeatureCard from "../components/allMainFeatureCard/AllMainFeatureCard";
import NavContactCard from "../components/navContactCard/NavContactCard";
import { MdEmail } from "react-icons/md";

export default function HomePage() {
  return (
    <>
      <div className="homePage">
        <Slider
          city="Tornoto"
          country="Canada"
          text="HURRY! GET THE BEST VILLA FOR YOU"
          imagesLinks={[
            "../../../public/images/Slider/banner-01.jpg",
            "../../../public/images/Slider/banner-02.jpg",
            "../../../public/images/Slider/banner-03.jpg",
          ]}
        />

        <Featured
          srcImage="../../../public/images/featured/featured.jpg"
          introduce={{
            nameSection: "FEATURED",
            title: "Best Appartment & Sea View",
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
                valFeature: "185 m",
                srcLogo: "../../../public/images/featured/info-icon-01.png",
              },
              {
                whatFeature: "Total Flat Space",
                valFeature: "185 m",
                srcLogo: "../../../public/images/featured/info-icon-02.png",
              },
              {
                whatFeature: "Total Flat Space",
                valFeature: "185 m",
                srcLogo: "../../../public/images/featured/info-icon-03.png",
              },
              {
                whatFeature: "Total Flat Space",
                valFeature: "185 m",
                srcLogo: "../../../public/images/featured/info-icon-03.png",
              },
            ]}
          />
        </Featured>

        <VideoView
          nameSection="VIDEO VIEW"
          title="Get Closer View & Different Feeling"
          srcImage="../../../public/images/videoView/background.jpg"
          srcPoster="../../../public/images/videoView/video-frame.jpg"
          srcVideo="../../../public/videos/video.mp4"
        >
          <PreviousAchievementCard
            data={[
              { number: "34", achievement: "Buildings Finished Now" },
              { number: "34", achievement: "Buildings Finished Now" },
              { number: "34", achievement: "Buildings Finished Now" },
            ]}
          />
        </VideoView>

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
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,",
                secondP:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,",
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
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,",
                secondP:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,",
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
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,",
                secondP:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,",
                contentBtn: "Schedule a visit",
              },
            },
          ]}
        />
        <Properties
          nameSection="| PROPERTIES"
          title="We Provide The Best Property You Like"
          filterData="Show All"
          data={[
            {
              src: "/public/images/property/property-01.jpg",
              type: "Villa House",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-02.jpg",
              type: "Apartment",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-03.jpg",
              type: "Penthouse",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-04.jpg",
              type: "Villa House",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-05.jpg",
              type: "Villa House",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
            {
              src: "/public/images/property/property-06.jpg",
              type: "Villa House",
              price: "$1.180.000",
              street: "54 Mid Street Florida, OR 27001",
              bedrooms: "6",
              bathrooms: "5",
              area: "450m²",
              floor: "3",
              parking: "8 spots",
              textButton: "Schedule a visit",
            },
          ]}
        />
      </div>
    </>
  );
}
