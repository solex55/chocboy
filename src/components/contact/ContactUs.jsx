import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto px-5 md:px-20">
        <div className="flex flex-col lg:flex-row gap-10 py-20">
          <div className="w-full lg:w-2/5 mb-16">
            <h2 className="text-3xl">Don’t know where to start?</h2>
            <p className="text-sm mt-5">
              Our amazing customer care officials are always ready to help
            </p>

            <div className="mt-10 md:mt-20">
              <div className="flex items-center gap-7">
                <div className="h-28 w-28 bg-[#d9d9d9] rounded-full" />

                <div className="text-sm">
                  <p className="font-bold mb-5">Customer support</p>
                  <p>+234 9067939532</p>
                </div>
              </div>

              <div className="flex items-center gap-7 mt-10">
                <div className="h-28 w-28 bg-[#d9d9d9] rounded-full" />

                <div className="text-sm">
                  <p className="font-bold mb-5">WhatsApp</p>
                  <p>+234 9067793927</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl">Reach out to us!</h2>
            <p className="text-sm max-w-lg mt-5">
              Got a question about Chocboy? Want to partner with us? Have any
              suggestions, or just ant to say Hi?
            </p>

            <form className="mt-10 md:mt-20 text-sm">
              <div>
                <input
                  placeholder="Full Name"
                  className="w-full bg-transparent border border-white rounded-md h-[50px] px-4 placeholder:text-[#d7d7d7]"
                />
              </div>

              <div className="my-7">
                <input
                  placeholder="Email Address"
                  className="w-full bg-transparent border border-white rounded-md h-[50px] px-4 placeholder:text-[#d7d7d7]"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full bg-transparent resize-none border border-white rounded-md h-[230px] p-4 placeholder:text-[#d7d7d7]"
                />
              </div>

              <div className="text-center">
                <button className="mt-7 bg-sec px-10 py-3 rounded-md text-main hover:border hover:border-white hover:bg-transparent hover:text-white transition duration-500 ease-in-out">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
