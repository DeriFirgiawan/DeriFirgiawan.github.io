import { ReactComponent as Hero } from '../../Assets/hero/hero_deri.svg';

const Header = ({title, text}) => {
  return (
    <header id="about" aria-label="About Me" className="animateRightIn-1">
      <Hero title={title} />
      <div className="p-2 my-4">
        <h1 className="animateRightIn-2 text-2xl text-black font-semibold" aria-label={title} title={title}>{title}</h1>
        <p className="animateRightIn-3 text-base text-gray-400 font-medium my-2" aria-label={text}>
          {text}
        </p>
        <div className="animate-pulse animateRightIn-2">
          <a href="#contact" rel="noopener noreferrer" className="text-base text-black underline font-medium hover:font-bold my-4" aria-label="Contact Me" title="Contact Me">Contact Me</a>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
