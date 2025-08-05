import andromeda from "/images/andromeda.jpg";
import orion from "/images/orion.jpg";
import aurora from "/images/aurora.jpg";
import band from "/images/band.jpg";

function Hobbies() {
  return (
    <div className="flex flex-col gap-5 py-5">
      <h1 className="title">HOBBIES</h1>
      <div className="flex flex-col gap-2 shadow-sm bg-slate-100 dark:bg-slate-800 px-5 py-3 rounded-lg">
        <h2 className="text-2xl font-bold">Astrophotography</h2>
        <p>
          With a strong liking for both space and photography, I find capturing
          the night sky to be one of the most rewarding creative outlets.
          Despite the challenges of light pollution in the city, I use a
          tracking mount that rotates with the Earth's movement, allowing for
          longer exposures that reveal deep-sky objects. After capturing
          multiple frames, I stack and process them to enhance detail and reduce
          noise, bringing out the stunning beauty of the cosmos. Although it
          takes many hours and late nights for one photo, I find it rewarding.
        </p>
        <p>
          You can check out my astrophotography Instagram&nbsp;
          <a
            href="https://www.instagram.com/josh_likes_space/"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @josh_likes_space
          </a>
          . Below are a few of my favorite shots, including the Andromeda
          Galaxy, the Orion Nebula, and the Aurora Borealis.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            className="rounded-lg w-full sm:w-[48%] md:w-[30%] lg:w-[32%] object-cover"
            src={andromeda}
            alt="Andromeda Galaxy"
          />
          <img
            className="rounded-lg w-full sm:w-[48%] md:w-[30%] lg:w-[32%] object-cover"
            src={orion}
            alt="Orion Nebula"
          />
          <img
            className="rounded-lg w-full sm:w-[48%] md:w-[30%] lg:w-[32%] object-cover"
            src={aurora}
            alt="Aurora Borealis"
          />
        </div>
        <h2 className="text-2xl font-bold">Music</h2>
        <p>
          I'm also a big fan of music; I play guitar, piano, and saxophone. In
          high school, I participated in marching, concert, jazz, and show choir
          band. In my senior year I was a drum major for our Phantom of the
          Opera show, and I was also part of a quartet that performed the
          national anthem at a Omaha Storm Chasers baseball game. Recently I've
          been getting back into music by participating in the Lincoln Community
          Concert Band.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            className="rounded-lg w-full sm:w-[48%] md:w-[30%] lg:w-[32%] object-cover"
            src={band}
            alt="Marching Band"
          />
          <iframe
            className="rounded-lg w-full min-h-[300px] sm:w-[48%] md:w-[60%] lg:w-[64%] object-cover"
            src="https://www.youtube.com/embed/zWLZ-wwnjgA?si=bfhQrIJlBUSIVbEx"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
