import React, { useRef} from "react";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
          <h1
              ref={h11} // or you can combine refs if needed
              className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
  <span className="text-dark-heading dark:text-light-heading">
    Hi There 👋,<br />I'm
  </span>{" "}
              <span
                  ref={h12}
                  className="bg-clip-text text-transparent bg-gradient"
              >
    {name}
  </span>
          </h1>

          <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
        <div className="mt-5 md:mt-0 flex justify-center">
            <img
                ref={myimageref}
                className="w-full max-w-lg mx-auto"
                src={img}
                alt="Alexander Espinas"
            />
        </div>


    </main>
  );
}

export default Home;
