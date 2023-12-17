import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: "string";
  icon?: string;
  variant: "btn_dark_green";
};
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-full border ${variant} px-8 py-2 bg-green-400 text-white`}
      type={type}
    >
      {/* <Image src={icon} alt="icon" /> */}
      {title}
    </button>
  );
};

export default Button;
