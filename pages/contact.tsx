import client from "../api/apollo-client";
import { gql } from "@apollo/client";

export default function Contact(): JSX.Element {
  const sendEmail = (e) => {
    e.preventDefault();
    client.mutate({
      mutation: gql`
        mutation SEND_EMAIL {
          sendEmail(
            input: {
              from: "diego.gallardo@wpengine.com"
              subject: "test email"
              body: "test email rat"
              clientMutationId: "test"
            }
          ) {
            to
            origin
            sent
            message
          }
        }
      `,
    });
  };

  return (
    <>
      <div className="text-center pt-20">
        <div className="text-3xl font-bold">Contact Form</div>
        <div className="mr-10 ml-10 mb-10 pt-5 text-left pl-10 pr-10 pb-20 mt-5 border-solid border-4 rounded-lg">
          
          <form name="contact" method="post" action="/thanks">
            <input type="hidden" name="form-name" value="contact" />
            <div className="pt-5">
              
              <label htmlFor="name">Name</label>
              <input
                className="border-solid border-2 rounded-lg"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="pt-5">

              <label htmlFor="email">Email</label>
              <input
                className="border-solid border-4 rounded-lg"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="pt-5">

              <label htmlFor="message">Message</label>
              <textarea
                className="border-solid border-4 rounded-lg"
                name="message"
                id="message"
              />
            </div>
            <div className="pt-5">


              <input
                className="border-solid border-4 rounded-lg"
                type="submit"
                onClick={sendEmail}
              />
              Send
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

