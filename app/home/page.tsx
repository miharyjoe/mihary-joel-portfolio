export default function Page() {
  return (
    <div>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome to My Portfolio
            </h2>
            <p className="text-gray-600 mt-4">
              Showcasing my projects and skills
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800">Project 1</h3>
                <p className="text-gray-600 mt-4">Description of project 1.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800">Project 2</h3>
                <p className="text-gray-600 mt-4">Description of project 2.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800">Project 3</h3>
                <p className="text-gray-600 mt-4">Description of project 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
