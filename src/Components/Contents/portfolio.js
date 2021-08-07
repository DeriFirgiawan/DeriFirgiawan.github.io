const Portfolio = ({title, desc, children, image}) => {
  return (
    <div className="w-60 xs:w-full xs:my-20 my-6 h-96" aria-label={title}>
      <div className="p-4 bg-gray-200 h-40 xs:p-0">
        <img src={image} className="h-32 xs:h-auto" alt={title} title={title} />
      </div>
      <div className="my-6 relative xs:top-20 xs:my-0" aria-label={desc}>
        <p className="text-base tex-black font-medium" aria-label={title}>{title}</p>
        <p className="text-base text-gray-400 my-4">{desc}</p>
        <div className="flex flex-col" aria-label="Action Link">
          {children}
        </div>
      </div>
    </div> 
  )
}

export default Portfolio;
