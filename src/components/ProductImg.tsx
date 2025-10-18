import { useState } from "react";

interface Props {
  image: string[];
  name: string;
}

function ProductImg({ image, name }: Props) {
  const [img, setImg] = useState(image[0]);

  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row gap-3  ">
        <div className="flex justify-between sm:flex-col sm:justify-normal overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full">
          {image.map((img, index) => (
            <img
              onClick={() => setImg(img)}
              className="w-[24%] sm:w-full sm:mb-3 cursor-pointer flex-shrink-0 rounded-2xl border border-transparent hover:border-blue-200 transition-all"
              key={index}
              src={img}
              alt={name}
            />
          ))}
        </div>
        <div className="w-full sm:w-[80%]">
          <img className="w-full h-auto rounded-2xl" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductImg;
