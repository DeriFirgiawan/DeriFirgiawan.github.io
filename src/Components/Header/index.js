import { ReactComponent as Hero } from './hero_deri.svg';

const Header = ({title, text}) => {
  return (
    <header id="about" aria-label="About Me">
      <Hero title={title} />
      <div className="p-2 my-4">
        <h1 className="text-2xl text-black font-semibold" aria-label={title} title={title}>{title}</h1>
        <p className="text-base text-gray-400 font-medium my-2" aria-label={text}>
          I'm Deri from Bandung, Indonesia. I am a <span className="font-semibold text-black">Front-End Engineer</span> and a <span className="font-semibold text-black">Freelancer</span>. I really enjoy Mobile App development using <span className="font-semibold text-black">React Native</span> and I'm also very happy with <span className="font-semibold text-black">React JS</span> for Web App development.
        </p>
        <div className="animate-pulse">
          <a href="#contact" rel="noopener noreferrer" className="text-base text-black underline font-medium hover:font-bold my-4" aria-label="Contact Me" title="Contact Me">Contact Me</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
