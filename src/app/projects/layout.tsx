import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Agency Studio",
  description: "Explore our featured projects and case studies.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {children}
    </div>
  );
} 