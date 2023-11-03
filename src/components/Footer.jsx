import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={146} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-monserrat text-white-400 sm:max-w-sm ">
            Prepara el calzado para el nuevo semestre en tu tienda Nike más
            cercana.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between flex-1 flex-wrap lg:gap-10 gap-20">
          {footerLinks.map((link) => (
            <div className="" key={link.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {link.title}
              </h4>
              <ul>
                {link.links.map((li) => (
                  <li
                    className="mt-3 font-montserrat text-white-400 leading-normal text-base hover:text-slate-gray cursor-pointer"
                    key={li.name}
                  >
                    <a href={li.link}>{li.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-sm:flex-col justify-between mt-24 text-white-400 max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. Todos los derechos reservados.</p>
        </div>
        <p className="font-monserrat cursor-pointer">Terminos & Condiciones</p>
      </div>
    </footer>
  );
};
export default Footer;
