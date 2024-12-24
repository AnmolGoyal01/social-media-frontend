import { Feed, Suggestions, Container } from "../components";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <>
      <div className="flex-1 lg:w-3/5 p-4 overflow-y-auto md:mx-10">
        <div className="flex">
          <Container children={<Feed />} />
          <Container children={<Suggestions />} classname="hidden lg:block" />
        </div>
      </div>
    </>
  );
}
