import { useRef, useEffect } from "react";

function Contract({ value, ownerAddress }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <code>
      {`contract SimpleStorage {
  uint256 value = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span>
      {`
    address ownerAddress = `}
      <span className="secondary-color" ref={spanEle}>
        <strong>{ownerAddress}</strong>
      </span>


      {`;

  function read() public view returns (uint256) {
    return value;
  }

  function getOwnderAddress() public view returns (address) {
    return owner;
}

  function write(uint256 newValue) public {
    value = newValue;
  }
}`}
    </code>
  );
}

export default Contract;
