import Image from 'next/image';
import {
  FaCalendarDay,
  FaExternalLinkAlt,
  FaFile,
  FaGithub,
  FaMapMarkerAlt
} from 'react-icons/fa';
import Container from '../components/Container';

export default function About() {
  return (
    <Container>
      <div className="flex flex-col justify-center px-8 text-neutral-800 max-w-7xl">
        <h1 className="text-3xl font-bold mt-2.5">About</h1>
        <p className="mt-6">
          I am a software engineer who is driven by creative problem solving,
          continuous learning, and teamwork. I enjoy building applications that
          improve workflows and create efficiencies for the end user.
        </p>
        <p className="mt-4">
          <span className="font-bold">Front End Experience:</span> JavaScript,
          TypeScript, React, HTML, CSS, Jest, Storybook
        </p>
        <p className="mt-4">
          <span className="font-bold">Salesforce Development Experience:</span>{' '}
          3x Salesforce Certified (Developer, Platform App Builder,
          Administrator), Apex, SOQL, Visualforce, Lightning Component Framework
        </p>
        <p className="mt-4">
          My 10 years of experience working in higher education administration
          has given me a strong foundation in communication, collaboration,
          relationship building, project management, and people development. I
          thrive working in team-oriented organizations that value the diverse
          perspectives of their employees. As a former career services
          professional, I am passionate about helping people in their career
          journeys and transitions.
        </p>
        <p className="mt-4">
          Outside of work, I enjoy hiking, skiing, cycling, tennis, scuba
          diving, curling, and cooking.
        </p>
        <h2 className="text-2xl font-bold mt-8">Work Experience</h2>
        <p className="mt-6">
          I am currently employed as a Software Engineer at{' '}
          <a
            href="https://www.taskray.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            TaskRay
          </a>
          , where I help build a collaborative work management solution native
          to Salesforce that is designed for post-sale processes such as
          onboarding, installations, and implementations.
        </p>
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
        <h2 className="text-2xl font-bold mt-8">Speaking</h2>
        <p className="mt-6">
          Having worked in higher education, I enjoy presenting and sharing
          knowledge about technical and career-related topics.
        </p>
        <Image
          src="/dreamforce-talk.jpeg"
          alt="Dreamforce speaking image"
          width="640"
          height="480"
          className="mt-4"
        />
        <div className="mt-4">
          <p className="font-bold">
            It&apos;s a Date(time): A Courtship with JavaScript & Salesforce
          </p>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <p>San Francisco, CA | Dreamforce (Salesforce Annual Conference)</p>
          </div>
          <div className="flex items-center">
            <FaCalendarDay className="mr-2" />
            <p>September 22, 2022</p>
          </div>
          <div className="flex items-center">
            <FaExternalLinkAlt className="mr-2" />
            <a
              href="https://reg.salesforce.com/flow/plus/dreamforce22/maincontentcatalog/page/Catalog/session/1656082530120001wFSR"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Website
            </a>
          </div>
          <div className="flex items-center">
            <FaGithub className="mr-2" />
            <a
              href="https://github.com/whitelisab/df-22-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub Repo
            </a>
          </div>
          <p className="italic">
            Working with Dates and Datetimes in Salesforce and JavaScript can
            get complicated. Learn the edge cases involved in working on the
            Salesforce Platform in a date- and time-driven global application.
          </p>
        </div>
        <div className="mt-4">
          <p className="font-bold">
            Career Transitions Panel: Presented by the Colgate Professional
            Networks
          </p>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <p>Virtual</p>
          </div>
          <div className="flex items-center">
            <FaCalendarDay className="mr-2" />
            <p>October 21, 2020</p>
          </div>
          <div className="flex items-center">
            <FaExternalLinkAlt className="mr-2" />
            <a
              href="https://alumni.colgate.edu/event-registration/career-transitions-panel"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Website
            </a>
          </div>
          <p className="italic">
            A discussion with alumni panelists about how to navigate career
            transitions, offering advice and guidance to help you plan your next
            move.
          </p>
        </div>
      </div>
    </Container>
  );
}
