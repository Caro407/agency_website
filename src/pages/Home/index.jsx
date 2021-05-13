import React from 'react';

const Home = () => (
  <div className="page-element">
    <div className="top-dividor mx-auto w-80 mt-6"></div>
      <h2 className="text-center">Home</h2>
    <div className="bottom-dividor mx-auto w-80 mb-6"></div>

  <section className="container mx-auto py-8">
    <div className="">
      <h2 className="w-full my-2 text-3xl leading-tight text-center">
        Title
      </h2>

      <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-6">
          <h3 className="text-3xl leading-none mb-3">
            Lorem ipsum dolor sit amet
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
            <br />
            <br />

            Images from:

            <a href="https://undraw.co/">undraw.co</a>
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-6">

        </div>
      </div>

      <div className="flex flex-wrap flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-1/2 p-6 mt-6">

        </div>
        <div className="w-full sm:w-1/2 p-6 mt-6">
          <div className="align-middle">
            <h3 className="text-3xl leading-none mb-3">
              Lorem ipsum dolor sit amet
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              <br />
              <br />
              Images from:

              <a href="https://undraw.co/">undraw.co</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
  </div>
)

export default Home;
