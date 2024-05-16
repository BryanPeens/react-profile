import pic from "../assets/images/pp1.jpeg";
import about_bg from "../assets/images/about-bg.jpg";

// source https://tailwindcomponents.com/component/profile
export default function About() {
  return (
    <div>
      <div class="h-screen flex flex-wrap items-center  justify-center">
        <div class="container lg:w-full xl:w-2/7 sm:w-full md:w-2/3 shadow-lg transform duration-200 easy-in-out">
          <div class="h-48 overflow-hidden align-middle">
            <img class="w-full" src={about_bg} alt="" />
          </div>
          <div class="flex justify-center px-5 -mt-12">
            <img class="h-52 w-52 bg-white p-2 rounded-full" src={pic} alt="" />
          </div>
          <div class=" ">
            <div class="text-center px-14">
              <h2 class="text-gray-800 text-3xl font-bold">Bryan Peens</h2>
              <a
                class="text-gray-400 mt-2 hover:text-blue-500"
                href="https://github.com/BryanPeens"
                target="BLANK()">
                @BryanPeens
              </a>
              <p class="mt-2 text-gray-500 text-sm">
                I enjoy building things that are user-friendly and simple to
                use.
                <br />
                I was a student of Belgium Campus ITVersity, where I learned the
                fundamentals of front-end and back-end web development.
                <br />
                I have had the opportunity to work with both small and large
                cross-functional teams and have developed a working style that
                leans towards flexibility, colaboration and continious learning.
                <br />
                I'm currently looking for a new developer role.
                <br />
              </p>
            </div>
            <hr class="mt-6" />
            <div class="flex  bg-gray-50 ">
              <social_icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
