import React from "react";

interface BackgroungImageProps {
  url: string;
  children?: React.ReactNode;
}

export default function BackgroundImage({
  url,
  children,
}: BackgroungImageProps) {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="flex h-auto min-h-[350px] items-center bg-cover bg-fixed bg-[top_center] bg-no-repeat md:min-h-[500px]"
    >
      {children}
    </div>
  );
}
