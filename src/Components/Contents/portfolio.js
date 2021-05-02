const Portfolio = ({title, desc, children, image}) => {
  return (
    <div className="w-60 xs:w-full xs:my-20 my-6" aria-label={title}>
      <div className="p-4 bg-gray-200 h-40 xs:p-0">
        <img src={image} className="h-32 xs:h-auto" alt={title} title={title} />
      </div>
      <div className="my-4" aria-label={desc}>
        <p className="text-base tex-black font-medium" aria-label={title}>{title}</p>
        <p className="text-base text-gray-400 my-4">{desc}</p>
      </div>
      <div className="flex flex-col relative top-0 bottom-0" aria-label="Action Link">
        {children}
      </div> 
    </div> 
  )
}

export default Portfolio;
