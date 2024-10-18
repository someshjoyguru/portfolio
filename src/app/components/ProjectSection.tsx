import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="pb-10">
        <h1 className="text-2xl font-bold mb-5">Projects </h1>
    <Card className="w-full max-w-full p-2 md:p-6border-gray-200 shadow-lg">
      <CardHeader className="cursor-pointer" onClick={toggleAccordion}>
        <CardTitle className="text-lg font-semibold text-gray-800">
        <Link href="https://codolio.com/profile/someshjoyguru"> An experimental investigation and predictive modeling using machine learning technique for reclamation of metal values from scrap NdFeB magnets  <FontAwesomeIcon icon={faLink} /></Link> <span><Button className="h-6 w-24" variant="outline" onClick={toggleAccordion}>
            {isExpanded ? "Show Less" : "Show More"}
            </Button></span>
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="font-medium text-gray-600">
              Impact Factor: <span className="text-gray-800">6.1</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col space-y-1.5">
              <h3 className="font-semibold text-gray-700">Key Points:</h3>
              <ul className="list-disc text-sm list-inside text-gray-600">
                <li>Co-authored a paper on using Machine Learning for NdFeB metal recovery, published in the Journal of Industrial and Engineering Chemistry</li>
                <li>Built machine learning models to optimize recovery conditions for NdFeB metals from real-world data</li>
                <li>Worked with a team on experiments and data integration for efficient metal extraction using machine learning</li>
              </ul>
            </div>
          </div>
        </CardContent>
      )}

      
    </Card>
    </section>
  );
};

export default ProjectSection;
