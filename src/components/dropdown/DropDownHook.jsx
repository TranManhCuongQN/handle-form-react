import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropDownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "Select your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: "job",
  });

  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };

  const [label, setLabel] = useState(dropdownLabel);

  useEffect(() => {
    if (dropdownValue === "") setLabel(dropdownLabel);
  }, [dropdownValue]);

  console.log(data);
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {/* <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="teacher"
        >
          Teacher
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="developer"
        >
          Developer
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="doctor"
        >
          Doctor
        </div> */}

        {data.map((item) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={item.value}
            key={item.id}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

// Chúng ta sẽ gặp rắc rối vì ở đây ta sử dụng toàn thẻ div thôi để làm custom drop down chứ không phải sử dụng thẻ select trong html bình thường để truy xuất đc dữ liệu bởi vì thẻ select là nhứng thẻ truy vấn trong form. Cho nên nó có thể truy xuất đc dữ liệu khi nhấn vào select nhưng sử dụng những thẻ select như vậy chúng ta không thể làm đẹp drop down của chúng ta cho nên ta phải sử dụng những div như này nhưng mà sử dụng div như này sẽ bị vấn đề không truy xuất đc thông qua những cái name hay là onChange onBlur. Để làm đc thì ta sẽ sử dụng 1 cái hook là useWatch ( trong react-hook-form)
export default DropDownHook;
