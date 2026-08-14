'use client'


import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
// import LateralMenu from "../layout/LateralMenu"

export default function ProductsCard() {
  const list = [
    {
      title: "Blanca Nieves",
      img: "/images/blanca_nieves.jpg",
      price: "$5.50",
    },
    {
      title: "Blanca Nieves 2",
      img: "/images/blanca_nieves.jpg",
      price: "$3.00",
    },
    {
      title: "Blanca Nieves 2",
      img: "/images/blanca_nieves.jpg",
      price: "$3.00",
    },
    {
      title: "Blanca Nieves 2",
      img: "/images/blanca_nieves.jpg",
      price: "$3.00",
    },
    
  ];

  return (

    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
