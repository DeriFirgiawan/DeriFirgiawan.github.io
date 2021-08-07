const Expertise = ({data}) => { 
  return (
    <section id="expertise" className="my-32" aria-label="Expertise">
      <h2 className="text-2xl text-black font-medium">Expertise</h2>
      <div className="my-7 p-1 flex flex-wrap justify-between">
        {
          data.map(resultData => {
            return (
              <div id={resultData.title} className="w-56 xs:w-28" aria-label={resultData.title} key={resultData.title}>
                <p className="text-base text-gray-600 font-semibold">{resultData.title}</p>
                <ul className="my-2">
                  {
                    resultData.skill.map(result => {
                      return (
                        <li className="text-base text-gray-400 my-2 font-medium" key={result}>{result}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Expertise;
