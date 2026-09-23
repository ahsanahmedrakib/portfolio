import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects, ProjectDetail } from "@/components/features/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      type: "article",
      url: `https://ahsanahmedrakib.vercel.app/projects/${project.slug}`,
      title: `${project.name} — Ahsan Ahmed Rakib`,
      description: project.tagline,
      siteName: "Ahsan Ahmed Rakib Portfolio",
      images: [{ url: "/rakib.jpg", alt: project.name }],
    },
    twitter: {
      card: "summary",
      title: `${project.name} — Ahsan Ahmed Rakib`,
      description: project.tagline,
      images: ["/rakib.jpg"],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}