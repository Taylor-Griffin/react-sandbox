import { useRef } from 'react';

const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = 'Sub Dog';
    inputRef.current.style.backgroundColor = 'red';
    paraRef.current.style.color = 'red';
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
      <p ref={paraRef}>Test</p>
    </div>
  );
};

export default UseRefExample1;
