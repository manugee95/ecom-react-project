

function Login() {
  return (
    <div className="my-[5%] mx-[30%]">
      <h1 className="text-center mb-[10px] text-2xl font-bold">
        Login Here
      </h1>
      <form action="">
        <div className="mb-3">
          <input
            type="email"
            className="outline outline-1 w-full p-[10px]"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input type="password" className="outline outline-1 w-full p-[10px]"
            placeholder="Password" />
        </div>
        <div>
          <button className="bg-blue-950 p-[10px] text-white rounded-lg">
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login