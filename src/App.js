import { Fragment, Suspense, lazy, useEffect } from 'react';
import AOS from 'aos';
import { Contents } from './Utils/content';
import { SkeletonFolio, SkeletonRepo } from './Components/Skeleton';
import Header from './Components/Header';
import Expertise from './Components/Contents/expertise';
import Footer from './Components/Footer';
const Portfolio = lazy(() => import('./Components/Contents/portfolio'));
const Repositories = lazy(() => import('./Components/Contents/repositories'));

export default function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 900
    }, []);
  })
  return (
    <main className="container overflow-hidden mx-auto my-16 px-72 md:px-24 xs:px-6">
      <Header title={Contents.about.title} text={Contents.about.text} />
      
      <section id="showcase" className="my-36 flex flex-wrap justify-between xs:flex-col xs:justify-center">
        
        {
          Contents.portfolio.map(result => {
            return (
              <Suspense fallback={<SkeletonFolio />} key={result.image}>
                <Portfolio key={result.image} title={result.title}desc={result.desc.en} image={result.image}>
                  <a href={result.repo} target="_blank" rel="noopener noreferrer" className="text-base text-black font-medium underline">Github Repositories</a>
                  <Fragment>
                    {
                      result.demo ? (
                        <a href={result.demo} target="_blank" rel="noopener noreferrer" className="text-base text-black font-medium underline my-3">Demo</a>
                      ) : null
                    }
                  </Fragment>
                </Portfolio>

              </Suspense>
            )
          })
        }
      </section>

      <section className="my-36" id="repositories">
        <h1 className="text-2xl text-black xs:text-center font-medium">Repositories</h1>
        <div className="my-4 flex justify-between flex-wrap">
          
          {
            Contents.repositories.map(result => {
              return (
                <Suspense fallback={<SkeletonRepo />} key={result.repo}>
                  <Repositories title={result.title} desc={result.desc.en} link={result.repo} key={result.repo} />
                </Suspense>
              )
            })
          }
        </div>
      </section>
      <Expertise data={Contents.expertise} />
      <section id="contact" className="my-36 text-center">
        <a href="mailto:firgiawanderi@gmail.com" className="text-3xl text-black underline font-semibold transition-all hover:text-4xl xs:text-2xl xs:hover:text-3xl">firgiawanderi@gmail.com</a>
      </section>
      <Footer data={Contents.sosialLink} />
    </main>
  )
}
