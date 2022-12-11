import Image from 'next/image';
import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Image
            src="/headshot-resized.png"
            alt="Headshot image"
            className="rounded-full"
            width="200"
            height="200"
          />
          <h1 className="text-3xl font-bold text-neutral-800 mt-2.5">
            Lisa White
          </h1>
          <p className="text-base md:text-lg text-neutral-800 mt-2.5">
            Software Engineer
          </p>
          <p className="text-base md:text-lg text-neutral-800">
            JavaScript | TypeScript | React
          </p>
          <p className="text-base md:text-lg text-neutral-800">
            3x Certified Salesforce Developer
          </p>
        </div>
      </div>
    </Container>
  );
}
