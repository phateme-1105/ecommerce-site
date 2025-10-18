import React from "react";

const NewsletterBox = () => {
  const onsubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="block container">
      <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">
          Subscribe now & get 20% off
        </p>
        <p className="text-gray-400 m-3 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fuga
          dolores repellat earum facilis est neque
        </p>
        <form
          className="flex w-full sm:w-1/2  mx-auto border-1 border-gray-300 rounded-[30px]  mt-2"
          onSubmit={onsubmitHandler}
        >
          <input
            className=" flex-grow w-0  outline-0 p-3"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            className="bg-amber-400  text-white px-6 py-3 rounded-[30px] font-semibold hover:bg-amber-500 transition duration-75 m-[4px]
             "
            type="submit"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterBox;
