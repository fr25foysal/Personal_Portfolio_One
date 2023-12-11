import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
      <div className="min-h-screen bg-black">
        <h2 className="text-white text-2xl text-center ">
          _Hi, I'm _Foysal_Rahman.
        </h2>
        <h1 className='text-4xl text-white'>
          <Typewriter
           options={{
            // strings: ['Hello', 'World'],
            autoStart: true,
            loop: true,
          }}
            onInit={(typewriter) => {
              typewriter
              .pauseFor(2500)
              .typeString('A simple yet powerful native javascript')
              .pauseFor(300)
              .deleteChars(10)
              .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
              .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
              .pauseFor(1000)
              .start();
            }}
          />
        </h1>
      </div>
    );
};

export default Banner;