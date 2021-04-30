export const SkeletonFolio = () => {
  return (
    <section className="w-60 xs:w-full xs:my-20">
      <div className="animate-pulse flex flex-col">
        <div className="bg-gray-300 w-full h-36 rounded" />
        <div className="my-4">
          <div className="bg-gray-300 rounded h-4 w-2/6 my-2" />
          <div className="bg-gray-300 rounded h-4 w-5/6 my-2" />
          <div className="bg-gray-300 rounded h-4 w-5/6 my-2"/>
          <div className="bg-gray-300 rounded h-4 w-5/6 my-2" />
        </div>
      </div>
    </section>
  );
}

export const SkeletonRepo = () => {
  return (
    <div className="animate-pulse border border-light-gray-300 p-5 my-7 w-1/2 rounded h-44 mx-4 my-4 xs:h-auto md:w-full xs:w-full xs:justify-center" aria-label="Repositories">
      <div className="bg-gray-300 rounded h-4 w-2/6 my-2" />
      <div className="bg-gray-300 rounded h-4 w-5/6 my-2" />
      <div className="bg-gray-300 rounded h-4 w-5/6 my-2"/>
      <div className="bg-gray-300 rounded h-4 w-5/6 my-2" />
      <div className="my-3 flex justify-between items-center" arial-label="Action Link">
        <div className="bg-gray-300 rounded-full w-8 h-8" />
      </div>
    </div>
  )
}