import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer md:justify-items-center px-10 pb-4 pt-8 bg-sky-300 text-black ">
        <div>
          <span className="footer-title">Services</span>
          <div className="flex md:flex-col gap-3">
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <div className="flex md:flex-col gap-3">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>{" "}
          </div>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <div className="flex md:flex-col gap-3">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>{" "}
          </div>
        </div>
        <div>
          <span className="footer-title">CONTACT US</span>
          <div className="flex md:flex-col gap-3">
            <a className="link link-hover">Phone number: (907) 486-2612</a>
            <a className="link link-hover">
              City: Kodiak -- State: Alaska (AK)
            </a>
            <a className="link link-hover">Zipcode: 99615 -- Country: USA</a>{" "}
          </div>
        </div>
      </footer>
      <footer className="footer px-10 md:px-20 pb-4  bg-sky-300 text-base-content">
        <div className="items-center flex  flex-col md:flex-row">
          <img src="/logo.svg" alt="" />
          <p>
            <span className="text-3xl font-bold">HeroVers toy Store.</span>{" "}
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-gray-700 text-3xl">
            <a>
              <BsTwitter />
            </a>
            <a>
              <BsYoutube />
            </a>
            <a>
              <BsFacebook />
            </a>
          </div>
        </div>
      </footer>
      <p className="text-center text-black">
        <span className="font-semibold">&copy; Copyright</span> Agency and
        contributors HeroVers Terms 2023.
      </p>
    </div>
  );
};

export default Footer;
