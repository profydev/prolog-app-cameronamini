import Link from "next/link";
import capitalize from "lodash/capitalize";
import { Badge, BadgeColor } from "@features/ui";
import { Routes } from "@config/routes";
import {
  ProjectLanguage,
  ProjectStatus,
  APIProjectStatus,
} from "@api/projects.types";
import type { Project } from "@api/projects.types";
import styles from "./project-card.module.scss";

type ProjectCardProps = {
  project: Project;
};

const languageNames = {
  [ProjectLanguage.react]: "React",
  [ProjectLanguage.node]: "Node.js",
  [ProjectLanguage.python]: "Python",
};

const displayStatusValues = {
  //APIProjectStatus is the status from the API, ProjectStatus is the status we want to display
  [APIProjectStatus.info]: ProjectStatus.stable,
  [APIProjectStatus.warning]: ProjectStatus.warning,
  [APIProjectStatus.error]: ProjectStatus.critical,
};

const statusColors = {
  [ProjectStatus.stable]: BadgeColor.success,
  [ProjectStatus.warning]: BadgeColor.warning,
  [ProjectStatus.critical]: BadgeColor.error,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, language, numIssues, numEvents24h, status } = project;
  const displayStatus = displayStatusValues[status];

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.nameAndIconContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.languageIcon}
            src={`/icons/${language}.svg`}
            alt={language}
          />
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.language}>{languageNames[language]}</div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.issues}>
            <div className={styles.issuesTitle}>Total issues</div>
            <div className={styles.issuesNumber}>{numIssues}</div>
          </div>
          <div className={styles.issues}>
            <div className={styles.issuesTitle}>Last 24h</div>
            <div className={styles.issuesNumber}>{numEvents24h}</div>
          </div>
          <div className={styles.status}>
            <Badge color={statusColors[displayStatus]}>
              {capitalize(displayStatus)}
            </Badge>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Link href={Routes.issues} className={styles.viewIssuesAnchor}>
          View issues
        </Link>
      </div>
    </div>
  );
}
