import arr from "./arr";

const Ideas = () => {
  return (
    <>
      <h2 className="text-center font-bold text-3xl mt-7 ">
        ideas and advice{" "}
      </h2>
      <div className="flex justify-evenly mt-6 xl:flex-wrap">
        {arr.map((items) => (
          <div>
            <img
              src={items.img}
              alt="img"
              className="w-[250px] h-[350px] object-cover"
            />
            <h2 className="font-semibold text-2xl w-[200px] mt-2 xs:text-xl xs:mb-3">
              {items.about} ►{" "}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          class="text-black focus:outline-none  font-medium rounded-sm text-sm w-[300px] py-2.5 me-2 mb-2 border-2 border-black  "
        >
          read more{" "}
        </button>
      </div>
    </>
  );
};

export default Ideas;
