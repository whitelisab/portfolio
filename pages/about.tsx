import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { createClient } from 'contentful';
import { FaFile } from 'react-icons/fa';
import Container from '../components/Container';

type Props = {
  summary: {
    fields: {
      content: Document;
      title: string;
    };
  }[];
};

export default function About({ summary }: Props) {
  const aboutContent = summary.find((sum) => sum.fields.title === 'About')
    ?.fields.content;
  const workContent = summary.find(
    (sum) => sum.fields.title === 'Work Experience'
  )?.fields.content;

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => <p className="mt-4">{children}</p>
    }
  };

  return (
    <Container>
      <div className="flex flex-col justify-center px-8 text-neutral-800 max-w-5xl">
        <h1 className="text-3xl font-bold mt-2.5">About</h1>
        {documentToReactComponents(aboutContent, renderOptions)}
        <h2 className="text-2xl font-bold mt-8">Work Experience</h2>
        {documentToReactComponents(workContent, renderOptions)}
        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1KHaK8xFNUjJhE7CqUVI5YPsCxYQ6WnSD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-neutral-600 hover:bg-neutral-500 text-white py-2 px-4 rounded">
              <div className="flex items-center">
                <FaFile className="mr-2" /> View my resume
              </div>
            </button>
          </a>
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

  const res = await client.getEntries({
    content_type: 'summary',
    'fields.title[in]': 'About,Work Experience'
  });

  return {
    props: {
      summary: res.items
    }
  };
}
