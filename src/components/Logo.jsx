import pop from '../../public/food-potcorn.svg'

const Logo = () => {
  return (
    <div className="logo">
      <span role="img">
        <img src={pop} alt="" />
      </span>
      <h1>usePopcorn</h1>
    </div>
  );
};

export default Logo;