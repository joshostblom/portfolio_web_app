function Hobbies() {
  return (
    <div className="flex flex-col gap-5 py-5">
      <h1 className="title">HOBBIES</h1>
      <div className="flex flex-col gap-2 shadow-sm bg-slate-100 dark:bg-slate-800 px-5 py-3 rounded-lg">
        <h2 className="text-2xl font-bold">Hobbies</h2>
        <p>
          During my free time, I enjoy working on personal projects such as
          Android apps, home labs, and other applications like this website.
          Outside of programming, I enjoy tennis, hanging out with friends, and
          take pictures of the night sky. You can find my photos on my
          astrophotography Instagram&nbsp;
          <a
            href="https://www.instagram.com/josh_likes_space/"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @josh_likes_space
          </a>
          . I'm also a big fan of music; I play guitar, piano, and saxophone. In
          high school, I was part of a quartet that performed the national
          anthem at a Storm Chasers baseball game. This semester, I’ll be
          getting back into music by participating in the&nbsp;
          <a
            href="https://www.facebook.com/profile.php?id=100044109162937"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lincoln Community Concert Band
          </a>
          .
        </p>
        <div className="flex justify-center">
          <iframe
            className="w-full h-96"
            src="https://www.youtube.com/embed/zWLZ-wwnjgA?si=bfhQrIJlBUSIVbEx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
