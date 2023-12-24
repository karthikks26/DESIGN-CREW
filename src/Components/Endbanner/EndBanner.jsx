import img from "../../assets/endbanner/banner.jpg";
const EndBanner = () => {
  return (
    <>
      <div className="relative">
        <img
          src={img}
          className="w-full h-[300px] object-cover  my-5 xs:h-[400px]"
        />

        <div className="absolute top-16 left-10">
          <h3 className="font-bold text-2xl mb-6">
            <i>SHERWIN-WILLIANS</i>
            <span className="text-xl font-semibold"> + west elm</span>
          </h3>
          <h2 className="text-3xl font-bold">
            enjoy $15 off
            <br /> your purchase
          </h2>
          <p className="font-bold mt-2">
            at your local Sherwin-Williams* store
          </p>
          <button className="bg-white font-medium py-2 px-3 rounded-sm my-4">
            GET COUPOUN
          </button>
        </div>
      </div>
    </>
  );
};

export default EndBanner;
