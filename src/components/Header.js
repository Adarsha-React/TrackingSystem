const Title = () => {
  return (
    <div>
      <h1>Tracking System</h1>
    </div>
  );
};

const Header = () => {
  return (
    <div className="shadow-sm">
      <div className="flex justify-between items-center p-3 w-3/4 mx-auto">
        <Title />
        <div className="flex font-semibold text-xs">
          <h1 className="px-3">About</h1>
          <h1 className="px-3">Login</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
