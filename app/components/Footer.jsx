import Link from "next/link";
import config from "../config";

export default function Footer() {
  const IconRenderer = ({ icon }) => {
    const IconComponent = require("lucide-react")[icon];
    return <IconComponent size={24} className="text-white" />;
  };

  return (
    <footer className="px-2 md:px-10">
      <div className="flex flex-col md:flex-row items-between justify-between text-white px-1 md:px-16 py-10 md:py-20">
        <div className="md:w-1/2">
          <h1 className="text-6xl md:text-[8rem] font-bold leading-[-50rem]">
            Let&apos;s <br />
            <span className="text-[#F58327]">Talk!</span>
          </h1>
        </div>

        <div className="md:w-1/2 w-full mt-8 md:mt-0 bg-[#161616] p-8 rounded-3xl shadow-lg">
          <form className="flex flex-col space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="jane@innvoket.com"
                className="w-full px-4 py-3 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows="4"
                className="w-full px-4 py-3 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F58327] text-black font-semibold py-3 rounded-lg hover:bg-white transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#161616] rounded-3xl mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-72 p-4">
          <div className="flex flex-col space-y-4">
            {config.footer.contactDetails.map((contact, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 bg-[#1d1d1d] rounded-3xl px-4 py-6"
              >
                <IconRenderer icon={contact.icon} />
                <p className="text-gray-300">
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.text}
                  </a>
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-orange-500">Menu</h2>
              <ul className="space-y-2 text-white text-center md:text-left text-sm">
                {config.footer.menuLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 bg-[#161616] rounded-3xl py-10">
        <div className="text-center">
          <h3 className="text-orange-500 font-semibold mb-4">Follow us:</h3>
          <div className="flex space-x-4 justify-center">
            {config.footer.socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-xl border hover:bg-orange-500 transition-colors"
              >
                <IconRenderer icon={social.icon} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="name@email.com"
            className="bg-transparent border text-gray-300 px-5 py-3 rounded-3xl md:w-48 focus:outline-none"
          />
          <button className="bg-[#FF7A30] px-5 py-3 rounded-full transition-colors">
            <p>Subscribe for newsletter</p>
          </button>
        </div>
      </div>
    </footer>
  );
}
