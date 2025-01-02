import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Layout from "../Components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            {" "}
            At any query and info about product fell free to call anytime we
            24X7 variable{" "}
          </p>
          <p className="mt-3">
            <EmailIcon /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <PhoneCallbackIcon /> : 012-3456789
          </p>
          <p className="mt-3">
            <SupportAgentIcon /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
