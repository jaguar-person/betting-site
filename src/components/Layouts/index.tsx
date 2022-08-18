import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  return (
    <div className="Layouts bg-[#4c4c4c] min-h-screen px-3">
      <Navbar />
      {children}
    </div>
  );
}
