import { useEffect } from "react";
import { useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleClickOutDropDown = (e) => {
      // Nếu có nodeRef.current và  nodeRef.current không có chứa cái chúng ta nhấn vào và cái mà ta nhấn vào không phải button
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        console.log("click outside dropdown");
        setShow(false);
      } else {
        console.log("click inside dropdown");
      }
    };
    document.addEventListener("click", handleClickOutDropDown);
    return () => {
      document.removeEventListener("click", handleClickOutDropDown);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
