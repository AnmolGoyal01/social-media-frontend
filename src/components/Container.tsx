import React from "react";

type Props = {
  children?: React.ReactNode;
  classname?: string;
};

export default function Container({ children, classname }: Props) {
  return (
    <div className={`h-full w-auto max-w-screen-2xl mx-auto ${classname}`}>
    {children}
    </div>
  );
}
