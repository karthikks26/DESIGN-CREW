import d1 from "../../assets/Designers/d1.jpg";
import arr from "./arr";
const Designers = () => {
  return (
    <>
      <h3 className="text-center font-bold text-3xl mt-7 ">
        meet our expert designers{" "}
      </h3>
      <div className=" grid grid-cols-4  place-items-center mt-7 gap-y-7 xl:grid-cols-3 llg:grid-cols-2 sm:grid-cols-1 ">
        {arr.map((items, i) => (
          <div className="bg-slate-100 w-[300px] py-2 rounded-sm" key={i}>
            <img
              src={items.img}
              alt="person"
              className="w-[200px] h-[200px] rounded-full object-cover mx-auto mt-2"
            />

            <h3 className="font-bold text-lg mt-4 text-center">
              {items.n1} <br />
              {items.n2}
            </h3>
            <p className="font-semibold mt-4 text-center">{items.location} </p>
            <div className="flex justify-center">
              <button className="font-semibold border-b-4 border-black mt-3  r">
                view portfolio{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Designers;
