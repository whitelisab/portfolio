import { createClient } from 'contentful';
import Image from 'next/image';
import { IHeadline } from '../@types/generated/contentful';
import Container from '../components/Container';

type Props = {
  headline: IHeadline[];
};

export default function Home({ headline }: Props) {
  const headlineContent = headline[0].fields.content;

  return (
    <Container>
      <div className="flex flex-col justify-center max-w-5xl sm:px-6 lg:px-8">
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
          {headlineContent.map((content, index) => {
            let classes = `text-base md:text-lg text-neutral-800${
              index === 0 ? ' mt-2.5' : ''
            }`;

            return (
              <p className={classes} key={`hl-${index}`}>
                {content}
              </p>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID
      ? process.env.CONTENTFUL_SPACE_ID
      : '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      ? process.env.CONTENTFUL_ACCESS_TOKEN
      : ''
  });

  const res = await client.getEntries<IHeadline>({ content_type: 'headline' });

  return {
    props: {
      headline: res.items
    }
  };
}
