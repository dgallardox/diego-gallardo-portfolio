import client from "../apollo/apollo-client";
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

  const styles = {
    pageDiv: "text-left mt-10 border-solid border-2 border-lime-600 w-100",
    pageTitle:
      "text-3xl pl-10 mb-5 font-bold border-solid border-2 border-lime-600 w-100",
    formDiv:
      "inline-block mr-10 ml-10 mb-10 pt-5 text-left pl-10 pr-10 pb-20 mt-5 border-solid border-2 border-lime-600 w-100",
    submitButton: "bg-blue-600 rounded-md px-5 py-2",
  };

  return (
    <>
      <div className={styles.pageDiv}>
        <div className={styles.pageTitle}>Contact Form</div>

        <div className={styles.formDiv}>
          <form name="contact" method="post" action="/thanks">
            <input type="hidden" name="form-name" value="contact" />
            <div className="pt-5 border-solid border-2 border-lime-600 w-100">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                className="border-solid border-2 rounded-lg"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="pt-5 border-solid border-2 border-lime-600 w-100">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                className="border-solid border-4 rounded-lg"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="pt-5 border-solid border-2 border-lime-600 w-100">
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                className="border-solid border-4 rounded-lg"
                name="message"
                id="message"
              />
            </div>
            <div className="pt-5 border-solid border-2 border-lime-600 w-100">
              <input
                className={styles.submitButton}
                type="submit"
                onClick={sendEmail}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

