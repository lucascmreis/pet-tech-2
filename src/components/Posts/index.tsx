const Posts = ({ title = "", desc = "" }) => {
  return (
    <div className="container mx-auto">
      <div className="py-16 lg:py-20">
        <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-primary md:text-5xl lg:text-6xl">
          {title}
        </h1>

        <div className="pt-3 sm:w-3/4">
          <p className="font-body text-xl font-light text-primary dark:text-primary">
            {desc}
          </p>
        </div>

        <div className="pt-8 lg:pt-12">
          <div className="border-b border-grey-lighter pb-8">
            <span className="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">
              category
            </span>
            <a
              href="#"
              className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-primary dark:hover:text-secondary"
            >
              Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies
            </a>
            <div className="flex items-center pt-4">
              <p className="pr-2 font-body font-light text-primary dark:text-primary">
                July 19, 2020
              </p>
              <span className="font-body text-grey dark:text-primary">//</span>
              <p className="pl-2 font-body font-light text-primary dark:text-primary">
                4 min read
              </p>
            </div>
          </div>
          <div className="border-b border-grey-lighter pt-10 pb-8">
            <div className="flex items-center">
              <span className="mb-4 inline-block rounded-full bg-grey-light px-2 py-1 font-body text-sm text-blue-dark">
                category
              </span>
              <span className="mb-4 ml-4 inline-block rounded-full bg-yellow-light px-2 py-1 font-body text-sm text-yellow-dark">
                category
              </span>
            </div>
            <a
              href="#"
              className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-primary dark:hover:text-secondary"
            >
              Diam sit amet nisl suscipit adipiscing bibendum est ultricies
              integer
            </a>
            <div className="flex items-center pt-4">
              <p className="pr-2 font-body font-light text-primary dark:text-primary">
                June 30, 2020
              </p>
              <span className="font-body text-grey dark:text-primary">//</span>
              <p className="pl-2 font-body font-light text-primary dark:text-primary">
                5 min read
              </p>
            </div>
          </div>
          <div className="border-b border-grey-lighter pt-10 pb-8">
            <span className="mb-4 inline-block rounded-full bg-blue-light px-2 py-1 font-body text-sm text-blue">
              category
            </span>
            <a
              href="#"
              className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-primary dark:hover:text-secondary"
            >
              In eu mi bibendum neque egestas congue quisque egestas diam
            </a>
            <div className="flex items-center pt-4">
              <p className="pr-2 font-body font-light text-primary dark:text-primary">
                June 26, 2020
              </p>
              <span className="font-body text-grey dark:text-primary">//</span>
              <p className="pl-2 font-body font-light text-primary dark:text-primary">
                3 min read
              </p>
            </div>
          </div>
          <div className="border-b border-grey-lighter pt-10 pb-8">
            <span className="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">
              category
            </span>
            <a
              href="#"
              className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-primary dark:hover:text-secondary"
            >
              Elit eget gravida cum sociis natoque penatibus et magnis dis
            </a>
            <div className="flex items-center pt-4">
              <p className="pr-2 font-body font-light text-primary dark:text-primary">
                July 19, 2020
              </p>
              <span className="font-body text-grey dark:text-primary">//</span>
              <p className="pl-2 font-body font-light text-primary dark:text-primary">
                4 min read
              </p>
            </div>
          </div>
          <div className="border-b border-grey-lighter pt-10 pb-8">
            <div className="flex items-center">
              <span className="mb-4 inline-block rounded-full bg-grey-light px-2 py-1 font-body text-sm text-blue-dark">
                category
              </span>
              <span className="mb-4 ml-4 inline-block rounded-full bg-yellow-light px-2 py-1 font-body text-sm text-yellow-dark">
                category
              </span>
            </div>
            <a
              href="#"
              className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-primary dark:hover:text-secondary"
            >
              Ut tellus elementum sagittis vitae et leo duis ut diam
            </a>
            <div className="flex items-center pt-4">
              <p className="pr-2 font-body font-light text-primary dark:text-primary">
                June 30, 2020
              </p>
              <span className="font-body text-grey dark:text-primary">//</span>
              <p className="pl-2 font-body font-light text-primary dark:text-primary">
                5 min read
              </p>
            </div>
          </div>
          <div className="border-b border-grey-lighter pt-10 pb-8">
            <span className="mb-4 inline-block rounded-full bg-blue-light px-2 py-1 font-body text-sm text-blue">
              category
            </span>
            <a
              href="#"
              className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-primary dark:hover:text-secondary"
            >
              Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc
            </a>
            <div className="flex items-center pt-4">
              <p className="pr-2 font-body font-light text-primary dark:text-primary">
                June 26, 2020
              </p>
              <span className="font-body text-grey dark:text-primary">//</span>
              <p className="pl-2 font-body font-light text-primary dark:text-primary">
                3 min read
              </p>
            </div>
          </div>
        </div>

        <div className="flex pt-8 lg:pt-16">
          <span className="cursor-pointer border-2 border-secondary px-3 py-1 font-body font-medium text-secondary">
            1
          </span>
          <span className="ml-3 cursor-pointer border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-primary dark:hover:border-secondary dark:hover:text-secondary">
            2
          </span>
          <span className="ml-3 cursor-pointer border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-primary dark:hover:border-secondary dark:hover:text-secondary">
            3
          </span>
          <span className="group ml-3 flex cursor-pointer items-center border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-primary dark:hover:border-secondary dark:hover:text-secondary">
            Next
            <i className="bx bx-right-arrow-alt ml-1 text-primary transition-colors group-hover:text-secondary dark:text-primary"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
