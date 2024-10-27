import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
    
  const inputRef = useRef();

  const handleOnClick = () => {
    search(inputRef.current.value);
    inputRef.current.value="";

  }
  return (
    <div className="p_inputArea">
      <input type="text" placeholder="Search" ref={inputRef} />
      <IoIosSearch className="p_search-icon" onClick={handleOnClick} />
    </div>
  );
};
export default Header;
