export default function Headeritem({ name, Icon }) {
  return (
    <div className=" max-w-screen-2xl md:mx-20 mx-4 continer flex items-center space-x-2 cursor-pointer hover:text-blue-500">
      <Icon className="text-3xl text-red-600"/>
      <span className="hidden md:inline">{name}</span>
    </div>
  );
}
