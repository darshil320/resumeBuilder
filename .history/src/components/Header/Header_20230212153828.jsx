// import React from 'react'
// import styles from "./Header.modular.css";
// function Header() {
//   return (
//     <div classNameName={styles.container}>
//       <p classNameName={styles.heading}>
//         A <span>Resume</span> that stands out!
//       </p>
//       <p classNameName={styles.heading}>
//         Make your own Resume. <span>It's Free</span>
//       </p>
//     </div>
//   );
// }

// export default Header

import React from 'react'

function Header() {
  return (
    <>
      <section className="w-full bg-white dark:bg-wickeddark">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left bg-{#fffaf2} ">
            <img
              class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="data:image/webp;base64,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"
            ></img>
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="pb-12 text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Craft your career path with ease with Our resume maker can
                  help!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-50">
        <div className=" px-5 py-12 mx-auto lg:px-16">
          <div className="flex flex-col w-full mb-8 text-center">
            <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
              The best front end developers use Resume.js to state their
              presence.
              <a
                href="https://www.wickedtemplates.com/expo.html"
                className="font-semibold text-blue-600 lg:mb-0 hover:text-blue-500"
              >
                Our customers »
              </a>
            </span>
          </div>
          <div className="mx-auto text-center">
            <div className="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg"
                  alt="Figma"
                />
              </div>
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg"
                  alt="Framer"
                />
              </div>
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg"
                  alt="Sketch"
                />
              </div>
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg"
                  alt="Sketch"
                />
              </div>
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg"
                  alt="Invision"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <img
                      className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                      alt="hero"
                      src="https://d1civoyjepycei.cloudfront.net/static/img/resume.ae705f436bb3.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                {" "}
                Craft a Winning Resume in Minutes: The Latest and Greatest
                Resume Builder{" "}
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                Say Goodbye to Boring Resumes: Create a Stand-Out Profile with
                Our Resume Builder.
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                Create a Resume That Demands Attention with Our ATS-Friendly and
                Effective Resume Builder &amp; Resume.js.
              </p>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                Impress Employers with a Polished and Professional Resume and
                Unlock Your Career Opportunities with Our State-of-the-Art
                Resume templates.
              </p>
              <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div className="prose prose-md">
                  <ul>
                    <li className="text-gray-500">
                      Ain't no sunshine when she's gone.
                    </li>
                    <li className="text-gray-500">Expensive feature.</li>
                    <li className="text-gray-500">Really good feauture.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header