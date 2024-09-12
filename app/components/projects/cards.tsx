import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Rating from "../Rating";

const card = [
  {
    name: "Developer",
    title: "Talha Jutt",
    description:
      "Front-End Developers: Focus on the user interface (UI) and user experience (UX). They work with technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js to build the visual and interactive parts of web applications.",
  },
  {
    name: "Developer",
    title: "Ammar Rajpoot",
    description:
      "Back-End Developers: Work on the server-side of applications, managing databases, APIs, and the logic that powers applications. Common technologies include Node.js, Python, Java, Ruby, and databases like MySQL, MongoDB, and PostgreSQL.",
  },
  {
    name: "Developer",
    title: "Ali Ansari.",
    description:
      "Full-Stack Developers: Combine both front-end and back-end skills, allowing them to develop an entire application from the interface to the database and server management.",
  },
  {
    name: "Developer",
    title: "Mubeen Ansari.",
    description:
      "Front-End Developers: Focus on the user interface (UI) and user experience (UX). They work with technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js to build the visual and interactive parts of web applications.",
  },
];
export default function Cards() {
  return (
    <div className=" flex justify-center">
      <div className="  grid md:grid-cols-1 mt-20 lg:grid-cols-2   max-w-[1100px] m-auto gap-4">
        {card?.map((item,index) => {
          return (
            <div key={index} className=" ">
              <Card className="h-[200px] bg-redColor p-5">
                <CardHeader className="flex gap-3">
                  <h1 className=" text-2xl font-bold ">{item?.name}</h1>
                </CardHeader>
                <div className="flex flex-col">
                  <p className="text-md text-whiteColor font-bold">
                    {item?.title}
                  </p>
                </div>
                <p className="text-md text-whiteColor">
                  {item?.description.slice(0, 200)}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
