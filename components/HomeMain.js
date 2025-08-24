import React from "react";
import HomeImageGallery from "./HomeImageGallery";
import { MdLocationOn } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Map from "./Map";
import Link from "next/link";
import Sponsors from "../components/Sponsors";
import Sponsors2 from "./Sponsor2";

const HomeMain = () => {
  const router = useRouter();

  const navigate = (dest) => {
    router.push(dest);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200">
        {/* Hero Section */}
        <div className="relative h-[70vh] md:h-[90vh] mt-[80px] overflow-hidden">
          <HomeImageGallery />

<<<<<<< HEAD
      <div className={`h-[60vh] md:h-[95vh] mt-[80px] relative ${gradients.homePage}`}>
        <HomeImageGallery />
        <div className="absolute top-10 flex flex-col justify-center items-center sm:flex-row sm:gap-10 ">
          <div className="md:top-[20%] lg:top-[20%] xl:top-[5%] left-0 z-10 w-[90%] md:w-[65%] lg:w-[60%]  md:border-2 md:pt-8 md:mx-4 rounded-2xl md:px-10 ">
            <div className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left pt-4 mb-6">
              <span className="text-black"></span>{" "}
              <span className="text-white">
                4th International Conference on
              </span>{" "}
              <span className="text-white">Microwave</span>{" "}
              <span className="text-white">, Antenna and</span>{" "}
              <span className="text-white">Communication </span>{" "}
              <span className="text-white">2026 </span>
              <span className="text-blue-200 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                <br />
              </span>
            </div>
            <div className="w-full my-2 sm:pl-0 flex flex-col justify-center gap-4 lg:justify-start lg:gap-10 font-semibold">
              <div className="flex w-full max-w-[650px] justify-around md:justify-between">
                <div>
                  <p className="flex items-center gap-3">
                    <Link href="/registration">
                      <span className="bg-purple-200 rounded-full p-[13px] cursor-pointer">
                        <BsFillCalendarCheckFill className="w-3 h-3 md:w-5 md:h-5 text-lime-600" />
                      </span>
                    </Link>
                    <span className="text-sm lg:text-lg text-white">
                      {" "}
                      Date to be announced soon
=======
          {/* Transparent Text on Image */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-4 sm:px-12 z-10 gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-[65%] flex flex-col gap-6 items-center lg:items-start">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-blue-50 leading-tight max-w-5xl">
                4th International Conference on <br />
                Microwave, Antenna and Communication 2026
              </h1>

              <div className="flex flex-col sm:flex-row sm:gap-10 gap-4 mt-4 text-white font-medium items-center lg:items-start">
                <div className="flex items-center gap-3">
                  <Link href="/registration">
                    <span className="bg-white/30 backdrop-blur-sm p-3 rounded-full">
                      <BsFillCalendarCheckFill className="w-5 h-5 text-lime-300" />
>>>>>>> 9f60bd968d09dfcd044c5b8f8385f15dcf27a3bd
                    </span>
                  </Link>
                  <span className="text-sm sm:text-base">
                    October 23-25, 2026
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Link href="/#venue">
                    <span className="bg-white/30 backdrop-blur-sm p-3 rounded-full">
                      <MdLocationOn className="w-6 h-6 text-blue-300" />
                    </span>
                  </Link>
                  <span className="text-sm sm:text-base">
                    MNNIT Allahabad, India
                  </span>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          </div>
          <div className="top-[10%] md:top-[10%] lg:top-[20%] xl:top-[5%] py-8 px-4 w-[90%] md:w-[30%] lg:w-[30%] flex flex-col justify-center items-center text-white rounded-2xl z-10 ">
            <a
              href="#"
              download={true}
              className="block w-[50%] text-blue-900 bg-blue-200 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[12px] sm:text-sm px-5 py-2.5 text-center mb-1 sm:mb-10 dark:bg-blue-300 dark:hover:bg-green-500 dark:focus:ring-blue-900"
            >
              Call For Papers <br />
              (Announcing soon)
            </a>

            <a
              href=""
              className="block w-[50%] text-blue-900 bg-blue-200 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[12px] sm:text-sm px-5 py-2.5 text-center mb-1 sm:mb-10 dark:bg-blue-300 dark:hover:bg-green-500 dark:focus:ring-blue-900"
            >
              Submit Papers <br />
              (Announcing soon)
            </a>

            <Link href="/registration">
              <span className="block w-[50%] text-blue-900 bg-blue-200 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[12px] sm:text-sm px-5 py-2.5 text-center mb-1 sm:mb-10 dark:bg-blue-300 dark:hover:bg-green-500 dark:focus:ring-blue-900">
                Registration <br /> (Announcing soon)
              </span>
            </Link>
=======

            {/* Right Buttons */}
            <div className="w-full sm:w-[60%] md:w-[40%] lg:w-[30%] flex flex-col items-center gap-4">
              <a
                href="#"
                download
                className="w-[80%] sm:w-[60%] text-blue-900 bg-white/80 hover:bg-orange-400 font-semibold rounded-full text-sm md:text-base px-5 py-2.5 text-center"
              >
                Call For Papers <br />
                (Announcing soon)
              </a>
              <a
                href=""
                className="w-[80%] sm:w-[60%] text-blue-900 bg-white/80 hover:bg-orange-400 font-semibold rounded-full text-sm md:text-base px-5 py-2.5 text-center"
              >
                Submit Papers <br />
                (Announcing soon)
              </a>
              <Link href="/registration">
                <span className="w-[80%] sm:w-[60%] text-blue-900 bg-white/80 hover:bg-orange-400 font-semibold rounded-full text-sm md:text-base px-5 py-2.5 text-center cursor-pointer">
                  Registration <br />
                  (Announcing soon)
                </span>
              </Link>
            </div>
>>>>>>> 9f60bd968d09dfcd044c5b8f8385f15dcf27a3bd
          </div>
        </div>

<<<<<<< HEAD
      <div className={`w-full text-black ${gradients.homePage}`}>
        <section className="pt-6 w-full">
          <div className=" container mx-auto flex md:px-5 py-2 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 px-6 lg:pr-24 md:pr-16 relative flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="relative title-font text-4xl md:text-6xl mb-4 font-bold border-b-4 pb-4 px-8 md:px-0 md:pr-24 border-cyan-600">
                <span className="text-blue-400">MAC</span>2026
              </h1>
              <h2 className="text-lg">
                <span>Co-Organised By</span>

                <p>
                  <span className="text-blue-500 font-bold text-xl block">
                    MNNIT ALLAHABAD, India
                  </span>
                  <span className="text-blue-500 font-bold text-xl block">
                    RGPV Bhopal, India
                  </span>

                  <span className="text-blue-500 font-bold text-xl block">
                    MANIT Bhopal, India
                  </span>
                </p>
              </h2>
              <br />
              <p className="md:mb-8 leading-relaxed font-semibold text-lg text-justify">
                Welcome to the International Conference on Microwave, Antenna,
                and Communication (MAC-2026)! Join us in the scenic city of
                Bhopal, Madhya Pradesh, India, from June 27-29, 2026, for an
                enriching experience of knowledge, research and innovation.
                Technically sponsored by IEEE UP section, MAC 2026 is jointly
                organised by MANIT Bhopal, RGPV Bhopal and MNNIT Allahabad.
                MAC-2026 serves as a dynamic platform, bringing together
                researchers, academicians, industry professionals, and startups
                to showcase their cutting-edge research, share innovative ideas,
                and explore the emerging trends of Microwave, Antenna and
                Communication technologies. MAC-2026 will also feature a special
                track on Young Professionals, Women in Engineering and SIGHT,
                which will provide opportunities for networking, mentoring and
                career development. The conference will feature keynote
                speeches, invited talks, panel discussions, technical sessions,
                poster presentations and exhibitions. Let us engage in
                thought-provoking technical sessions, delve into recent
                developments, and foster collaborative discussions. MAC-2026 is
                an opportunity for collaboration and networking with
                international experts. We invite you to join us at MAC-2026 and
                be a part of this exciting event!
=======
        {/* About Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 text-blue-900">
              <h1 className="text-4xl md:text-6xl font-bold border-b-4 border-cyan-600 pb-4 mb-4">
                <span className="text-orange-500">MAC</span>2026
              </h1>
              <h2 className="text-lg font-semibold mb-2">Organised By</h2>
              <p className="text-xl font-bold text-orange-600">
                DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING,
MNNIT ALLAHABAD
              </p>
              <p className="mt-6 leading-relaxed text-lg text-justify font-medium">
                Welcome to the 4th International Conference on Microwave, Antenna, and Communication (MAC2026)! Join us in the scenic city of Prayagraj, Uttar Pradesh, India, from October 23-24, 2026, for
an enriching experience of knowledge, research and innovation. Technically sponsored by IEEE,
MAC 2026 is being organized Department of Electronics and Communication Engineering, MNNIT
Allahabad. MAC-2026 serves as a dynamic platform, bringing together researchers,
academicians, industry professionals, and startups to showcase their cutting-edge research,
share innovative ideas, and explore the emerging trends of Microwave, Antenna and
Communication technologies. The conference will feature keynote speeches, invited talks, panel
discussions, technical sessions, poster presentations and exhibitions. MAC-2026 is an opportunity
to you for collaboration and networking with international experts. We invite you to join us at MAC2026 and be a part of this exciting event!
>>>>>>> 9f60bd968d09dfcd044c5b8f8385f15dcf27a3bd
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/conf.webp" alt="conference" className="w-full rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Call for Papers */}
        <section id="callforpaper" className=" px-6 py-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 px-10 order-last md:order-first">
              <img src="/hp.png" alt="Call for Papers" />
            </div>
            <div className="md:w-1/2 text-blue-900">
              <h1 className="text-4xl lg:text-6xl font-bold border-b-4 border-cyan-600 pb-4 mb-4">
                Call For Papers <br />
                (Announcing soon)
              </h1>
              <h2 className="text-blue-600 font-bold text-xl mb-6">
                MICROWAVE , ANTENNA AND COMMUNICATION
              </h2>
              <p className="text-lg font-medium mb-6">
               The accepted and presented papers of the conference by duly registered authors will be submitted to IEEE Xplore Digital Library for possible publication after quality check.
              </p>

              <p className="text-lg font-medium mb-4">
                  The technical sessions will have four tracks covering recent
                  and emerging research topics in the field of Microwave,
                  Antenna and Communication. Every track will have the following
                  events:
                </p>
              <ul className="pl-6 list-disc space-y-2 text-lg font-semibold">
                <li>Paper Presentations and Best Paper Awards</li>
                <li>Keynote Lectures</li>
                <li>Special Sessions</li>
                <li>Panel Discussions</li>
                <li>Technical/Industrial Workshops</li>
              </ul>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-2">Submission Link</h3>
                <p className="text-lg mb-2">To be submitted via Microsoft CMT:</p>
                <a
                  href="https://cmt3.research.microsoft.com/MAC2025/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline hover:text-rose-500"
                >
                  To be announced soon
                </a>
              </div>
<<<<<<< HEAD
              <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-8 md:mt-2 font-medium text-gray-900 block">
                Paper Submission Link(Stay Tuned)
              </h1>
              <p className="px-16 md:px-0 mb-4 leading-relaxed  md:font-semibold md:text-lg">
                All papers must be submitted in PDF via Microsoft CMT:
              </p>
              <a
                className="text-blue-500 cursor-pointer inline-block md:text-lg"
                href="https://cmt3.research.microsoft.com/MAC2025/"
                target="_blank"
                rel="noreferrer"
              >
                To be announced soon
              </a>
=======
>>>>>>> 9f60bd968d09dfcd044c5b8f8385f15dcf27a3bd
            </div>
          </div>
        </section>

        {/* Map Section */}
        <Map />

        {/* Sponsors Sections */}
        <section className="p-6">
          <div className="container mx-auto flex flex-col">
            <h1 className="text-2xl text-blue-900 md:text-4xl font-bold border-b-4 pb-4 border-cyan-600 w-full md:w-[60%] mb-4">
              Past Technical Co-Sponsors
            </h1>
            <Sponsors />
          </div>
        </section>

        <section className="p-6">
          <div className="container mx-auto flex flex-col">
            <h1 className="text-2xl text-blue-900  md:text-4xl font-bold border-b-4 pb-4 border-cyan-600 w-full md:w-[60%] mb-4">
              Past Industrial Sponsors
            </h1>
            <Sponsors2 />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeMain;