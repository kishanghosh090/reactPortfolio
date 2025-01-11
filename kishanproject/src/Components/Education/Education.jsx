import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";


export default function Education(props) {
  return (
    <div className="collages px-4 z-50 mt-4">
      <Card className="py-4 bg-neutral-900 text-white flex flex-wrap rounded-2xl">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{props.collagename}</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={props.collageImage}
            width={270}
            height={180}
          />
        </CardBody>
        <CardFooter className="w-[100%] px-4">
          <p>{props.discription}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
