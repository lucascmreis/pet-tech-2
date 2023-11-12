import { Link, To } from "react-router-dom";
export interface CardMenuItemProps {
  title: string;
  description?: string;
  route: To;
}
export const CardMenuItem = ({
  title,
  description,
  route,
}: CardMenuItemProps) => {
  return (
    <div className="flex-col group justify-items-center">
      <div className="flex w-[240px] h-[240px] justify-center relative justify-items-center items-center  bg-bg shadow p-4 rounded-full text-gray-800 hover:shadow-lg">
        <Link
          to={route}
          className="p-2 justify-center relative justify-items-center items-center content-center"
        >
          <p className="paragraph text-md hover:flex">{description}</p>
        </Link>
      </div>

      <h2 className="font-semibold text-2xl mb-2">{title}</h2>
    </div>
  );
};
