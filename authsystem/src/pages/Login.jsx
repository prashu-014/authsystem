import Inputbox from "../componets/UI/Inputbox";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const data = Object.fromEntries(formdata.entries());
    form.reset();
  };
  return (
    <div className="min-h-screen w-full bg-blue-500 flex items-center justify-center px-4">
      <form
        className="w-full max-w-sm bg-white p-6 rounded-md shadow-md"
        onSubmit={handleLogin}
      >
        <h1 className="text-2xl font-bold mb-4 border-b pb-2">Login Page</h1>

        <div className="flex flex-col gap-4">
          <Inputbox name="Username" type="text" />
          <Inputbox name="Password" type="password" />
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
