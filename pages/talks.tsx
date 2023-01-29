import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { createClient } from 'contentful';
import {
  FaCalendarDay,
  FaExternalLinkAlt,
  FaGithub,
  FaMapMarkerAlt
} from 'react-icons/fa';
import Container from '../components/Container';

type Props = {
  summary: {
    fields: {
      content: Document;
      title: string;
    };
  };
  talks: {
    fields: {
      content: Document;
      title: string;
    };
  }[];
};

export default function Talks({ summary, talks }: Props) {
  const talksSummary = summary.fields.content;

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => <p className="mt-4">{children}</p>
    }
  };

  return (
    <Container>
      <div className="flex flex-col justify-center px-8 text-neutral-800 max-w-5xl">
        <h1 className="text-3xl font-bold mt-2.5">Talks</h1>
        {documentToReactComponents(talksSummary, renderOptions)}
        {talks.map((talk) => {
          return (
            <div className="mt-4" key={talk.sys.id}>
              <p className="font-bold">{talk.fields.title}</p>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <p>{talk.fields.location}</p>
              </div>
              <div className="flex items-center">
                <FaCalendarDay className="mr-2" />
                <p>{talk.fields.date}</p>
              </div>
              <div className="flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                <a
                  href={talk.fields.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Website
                </a>
              </div>
              {talk.fields.github && (
                <div className="flex items-center">
                  <FaGithub className="mr-2" />
                  <a
                    href={talk.fields.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    GitHub Repo
                  </a>
                </div>
              )}
              {documentToReactComponents(talk.fields.description)}
            </div>
          );
        })}
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

  const res1 = await client.getEntry('3ikrOFYB0XH5ANcggHBKDN');

  const res2 = await client.getEntries({
    content_type: 'talk',
    order: '-fields.date'
  });

  return {
    props: {
      summary: res1,
      talks: res2.items
    }
  };
}
