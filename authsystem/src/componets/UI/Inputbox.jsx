
const Inputbox = ({ name, type }) => {
  return (
    <input
      name={name}
      type={type}
      className=" border border-gray-400 rounded-sm w-full p-1"
      placeholder={name}
      required
    />
  );
};

export default Inputbox;
