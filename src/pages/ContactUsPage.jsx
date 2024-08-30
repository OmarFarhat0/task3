import ContactUsSectionPage from "../components/contactUsSectionPage/ContactUsSectionPage";
import Form from "../components/form/Form";
import HeadRoutePage from "../components/headRoutePage/HeadRoutePage";

export default function ContactUsPage() {
  return (
    <>
      <div className="contactUsPage">
        <HeadRoutePage thePath="HOME / CONTACT US" namePage="CONTACT US" />

        <ContactUsSectionPage
          info={{
            nameSection: "CONTACT US",
            title: "Get In Touch With Our Agents",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, animi dolorum repellat adipisci delectus nulla magnam necessitatibus maxime eaque doloribus cumque aliquid reprehenderit vel aliquam ut repudiandae quis, similique nemo",
          }}
          contactCardsData={[
            {
              srcImg: "/public/images/contactUs/phone-icon.png",
              text1: "010-020-0340",
              text2: "Phone Number",
            },
            {
              srcImg: "/public/images/contactUs/email-icon.png",
              text1: "info@villa.co",
              text2: "Business Email",
            },
          ]}
        >
          <Form
            data={[
              {
                label: "Full Name",
                type: "text",
                placeholder: "Your Name...",
              },
              {
                label: "Email Adress",
                type: "email",
                placeholder: "Your E-mail...",
              },
              { label: "Subject", type: "text", placeholder: "Subject..." },
              {
                label: "Message",
                type: "textarea",
                placeholder: "Your Message",
              },
            ]}
            contentSubmit="Send Message"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6129.80360796167!2d55.27215935727315!3d25.196777768768474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sDubai%20Mall!5e1!3m2!1sen!2snl!4v1725035399272!5m2!1sen!2snl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </ContactUsSectionPage>
      </div>
    </>
  );
}
