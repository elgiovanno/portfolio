import Logo from "../components/logo";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="border border-red-500">
        <Logo />
      </div>
      <div className="border border-blue-500">
        <div className="px-6 py-12 border border-green-300">
          <h1 className="mb-4 font-extrabold text-4xl text-gray-800">Who?</h1>
          <p>
            My name is Giovanni de la Rosa. I'm a musician, web developer, and
            like to consider myself of&nbsp;
            <span className="italic">"Student of Life"</span>.
          </p>
          <br />
          <p>
            What does that even <em>mean</em>?
          </p>
          <br />
          <p>
            To me, this means having a general curiosity about the people,
            objects, events and teachings that cross your path. After fighting
            against the proverbial current of life for so long, I just came to
            the realization that ALL of the things we encounter have something
            to teach us.
          </p>
        </div>
      </div>
    </div>
  );
}
