interface BtnElementProps {
  color: string;
  name: string;
  onClick?: () => void;
  className?: string;
}

const BtnElement: React.FC<BtnElementProps> = ({
  color,
  name,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} flex justify-center items-center md:w-[93px] -skew-x-16 cursor-pointer ${
        color === "red" ? "bg-red-600" : "border rounded-xs border-white"
      }`}
    >
      <p
        className={`skew-x-16 text-white w-full text-[14px] py-4 font-normal text-wrap leading-none text-center`}
      >
        {name}
      </p>
    </button>
  );
};

export default BtnElement;
