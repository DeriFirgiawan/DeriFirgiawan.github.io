const Portfolio = ({title, desc, children, image}) => {
  return (
    <div className="w-60 xs:w-full xs:my-20" arial-label={title}>
      <div className="bg-gray-200">
        <img src={image} alt={title} title={title} />
      </div>
      <div className="my-4" arial-label={desc}>
        <p className="text-base tex-black font-medium" arial-label={title}>{title}</p>
        <p className="text-base text-gray-400 my-4">{desc}</p>
      </div>
      <div className="my-4 flex flex-col" arial-label="Action Link">
        {children}
      </div> 
    </div> 
  )
}

export default Portfolio;
