import React from "react";
import Icon from "../../assets/icon-1.png";
import Icon2 from "../../assets/icon-2.png";
import Icon3 from "../../assets/icon-3.png";
import Icon4 from "../../assets/icon-4.png";
import Arrow from "../../assets/arrow-down.png";
import Arrow2 from "../../assets/arrow-revers.png";

const WorkFlow = () => {
  return (
    <section className="container mx-auto py-12 px-4" id="workflow">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <button className="bg-white py-2 px-4 text-[#6610f2] rounded-xl text-lg md:text-xl font-bold mb-4">
          Working Process
        </button>
        <h2 className="text-2xl md:text-5xl font-bold leading-snug">
          We Complete Our Work to Follow Some Easy Ways
        </h2>
      </div>

      {/* Step 1 */}
      <div className="py-6 flex flex-col md:flex-row items-center gap-4">
        <div className="md:w-2/3 w-full flex flex-col md:flex-row gap-6 items-center bg-gray-200/50 p-5 rounded border-2 border-gray-300">
          <img src={Icon} alt="" className="w-16 md:w-auto" />
          <div className="space-y-2 text-center md:text-left">
            <button className="bg-white py-2 px-4 text-[#6610f2] text-base md:text-xl font-bold">
              Step 01
            </button>
            <h2 className="text-xl md:text-3xl font-bold">
              Discovery & Analysis
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex justify-center">
          <img src={Arrow} alt="" className="w-10 md:w-auto" />
        </div>
      </div>

      {/* Step 2 */}
      <div className="py-6 flex flex-col-reverse md:flex-row items-center gap-4">
        <div className="md:w-1/3 w-full flex justify-center">
          <img src={Arrow2} alt="" className="w-10 md:w-auto" />
        </div>
        <div className="md:w-2/3 w-full flex flex-col md:flex-row gap-6 items-center bg-gray-200/50 p-5 rounded border-2 border-gray-300">
          <div className="space-y-2 text-center md:text-left">
            <button className="bg-white py-2 px-4 text-[#6610f2] text-base md:text-xl font-bold">
              Step 02
            </button>
            <h2 className="text-xl md:text-3xl font-bold">
              Competitor Analysis
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium
            </p>
          </div>
          <img src={Icon2} alt="" className="w-16 md:w-auto" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="py-6 flex flex-col md:flex-row items-center gap-4">
        <div className="md:w-2/3 w-full flex flex-col md:flex-row gap-6 items-center bg-gray-200/50 p-5 rounded border-2 border-gray-300">
          <img src={Icon3} alt="" className="w-16 md:w-auto" />
          <div className="space-y-2 text-center md:text-left">
            <button className="bg-white py-2 px-4 text-[#6610f2] text-base md:text-xl font-bold">
              Step 03
            </button>
            <h2 className="text-xl md:text-3xl font-bold">
              Strategy & Execution
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex justify-center">
          <img src={Arrow} alt="" className="w-10 md:w-auto" />
        </div>
      </div>

      {/* Step 4 */}
      <div className="py-6 flex flex-col-reverse md:flex-row items-center gap-4">
        <div className="md:w-1/3 w-full flex justify-center">
          <img src={Arrow2} alt="" className="w-10 md:w-auto" />
        </div>
        <div className="md:w-2/3 w-full flex flex-col md:flex-row gap-6 items-center bg-gray-200/50 p-5 rounded border-2 border-gray-300">
          <div className="space-y-2 text-center md:text-left">
            <button className="bg-white py-2 px-4 text-[#6610f2] text-base md:text-xl font-bold">
              Step 04
            </button>
            <h2 className="text-xl md:text-3xl font-bold">Get 3x Results</h2>
            <p className="text-base md:text-xl text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium
            </p>
          </div>
          <img src={Icon4} alt="" className="w-16 md:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
