import Logo from "../components/logo";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-indigo-400">
        <Logo />
      </div>
      <div className="lg:flex md:justify-center">
        <div className="card">
          <h1 className="card__heading">Who?</h1>
          <p>
            My name is Giovanni de la Rosa. I'm a musician, web developer, and
            like to consider myself a&nbsp;
            <span className="italic">"Student of Life"</span>.
          </p>
        </div>
        <div className="card card--white">
          <h1 className="card__heading">What?</h1>
          <p>
            Human, male, son, uncle, friend, multi-instrumentalist, composer,
            producer, audio engineer, web developer, SysArch enthusiast,
            surfer/kitesurfer, trailblazer.
          </p>
        </div>
        <div className="card">
          <h1 className="card__heading">When?</h1>
          <p>August 26th, 1984</p>
        </div>
        <div className="card card--white">
          <h1 className="card__heading">Where?</h1>
          <p>San Juan, Puerto Rico</p>
        </div>
        <div className="card">
          <h1 className="card__heading">Why?</h1>
          <p>
            Exposing my work, ideas, thoughts and learnings has never been a
            strength of mine. This is site an attempt to change that.
          </p>
        </div>
      </div>
    </div>
  );
}
