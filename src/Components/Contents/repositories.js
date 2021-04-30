const Repositories = ({title, desc, link}) => {
  return (
    <div className="shadow-md border-gray-200 p-5 my-7 w-1/2 rounded h-44 mx-4 my-4 xs:h-auto md:w-full xs:w-full xs:justify-center" aria-label="Repositories"  data-aos="zoom-in" data-aos-offset="600" data-aos-once="true">
      <h2 className="text-lg text-gray-500 font-semibold" aria-label={title}>{title}</h2>
      <p className="text-sm text-gray-400 my-2 font-medium" aria-label={desc}>{desc}</p>
      <div className="my-3 flex justify-between items-center" arial-label="Action Link">
        <i className="bx bxl-github text-3xl text-black" />
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-base text-blue-400 font-semibold hover:text-blue-600" arial-label="Detail" title="Detail Repositories">Detail</a>
      </div>
    </div>
  );
}

export default Repositories;
