import img from "../../assets/bghp.png";
import { Divider, Typography } from "antd";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-[#000011] flex justify-between">
      <div>
        <img className="w-fit h-screen" src={img} />
      </div>

      <div className="text-white w-1/2  align-middle text-center">
        <Typography.Text className="text-[48px] text-white font-normal">
          JDへようこそ
        </Typography.Text>{" "}
        <br />
        <Typography.Text className="text-[#F8AFA6] text-[66px]">
          Welcome Back{" "}
        </Typography.Text>
        <Divider />
        <Divider />
        <div className="text-center space-y-8">
          <button
            // onClick={login}
            className=" "
          >
            <Typography.Text className="text-black text-[2rem] font-bold hover:text-whit bg-[#F9D0D0] py-5 px-64 rounded-lg hover:bg-[#fab1b1] ease-in-out">
              Log In
            </Typography.Text>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
