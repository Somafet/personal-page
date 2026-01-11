import Link from "next/link";
import { IconWithTooltip } from "./icon-with-tooltip";
import ExternalLinkIcon from "./icons/external-link-icon";
import { JSX, type ReactNode } from "react";

type ProjectDisplayProps = {
  href?: string;
  projectName: ReactNode;
  description: string;
  techIcons: JSX.Element[];
};

const ProjectDisplay = ({
  projectName,
  description,
  techIcons,
  href,
}: ProjectDisplayProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-4">
          {techIcons}
          <span>─</span>
          {typeof projectName === "string" ? (
            <p className="text-lg font-semibold">{projectName}</p>
          ) : (
            projectName
          )}
        </div>
        <div className="pt-2">
          <p className="text-md max-w-[80%]">{description}</p>
        </div>
      </div>
      {href && (
        <div>
          <Link href={href} target="_blank">
            <IconWithTooltip
              icon={<ExternalLinkIcon strokeWidth="5px" />}
              tooltipText="Go!"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
