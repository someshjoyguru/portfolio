import * as React from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import data from "@/data/data.json";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectSection: React.FC = () => {
  return (
    <section className="pb-10">
      <h1 className="text-2xl font-bold mb-5">Projects</h1>

      {data.projects.map((project) => (
      <Card className="w-full max-w-full p-2 border-gray-200 shadow-lg space-y-2 mb-3">
        <CardHeader>
          <CardTitle className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">{project.title}</span>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <Link href={project["github-url"]}><FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-gray-600 hover:text-black" /></Link> 
              <Link href={project["project-url"]}><FontAwesomeIcon icon={faLink} className="h-6 w-6 text-gray-600 hover:text-black" /></Link> 
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="flex flex-wrap gap-2 text-sm pb-4">
          {project.tags.map((tag, index) => (
           <span key={index} className="bg-gray-800 text-white px-2 py-1 rounded">{tag}</span>
        ))}
          </div>

          <div className="space-y-1.5 text-gray-700 text-sm">
          {project.description.map((line, index) => (
                <p key={index}>• {line}</p>
              ))}
          </div>
        </CardContent>
      </Card>
      ))}
    </section>
  );
};

export default ProjectSection;
