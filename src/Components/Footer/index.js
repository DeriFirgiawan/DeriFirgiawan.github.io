const Footer = ({data}) => {
  return (
    <footer className="my-20 flex justify-between xs:flex-col-reverse xs:text-center xs:justify-center xs:items-center relative inset-y-20 xs:inset-y-40">
      <span className="text-base font-medium text-gray-400 xs:my-20">Deri Firgiawan &#169; {new Date().getFullYear()}</span>
      <div className="flex">
        {
          data.map(result => {
            return (
              <a href={result.link} target="_blank" rel="noopener noreferrer" className="mx-5 font-medium text-gray-400 hover:text-gray-600" arial-label={result.title} title={result.title} key={result.title}>{result.title}</a>
            )
          })
        }
      </div>
    </footer>
  );
}

export default Footer;
