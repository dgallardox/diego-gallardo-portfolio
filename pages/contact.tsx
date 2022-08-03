export default function Contact(): JSX.Element {
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
              <button
                className="border-solid border-4 rounded-lg"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}