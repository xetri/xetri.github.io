import * as meta from "@/lib/metadata"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

export function Projects() {
  return (<>
    <main className="p-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            {meta.Projects.length > 0 ? (
                <div className="space-y-6">
                    {meta.Projects.map((project, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                                <p className="text-muted-foreground">{project.description}</p>
                                <div className="mt-2 text-sm">
                                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            <FaGithub className="inline-block mr-1" />
                                            Code
                                        </a>
                                    )}
                                    {project.preview && (
                                        <a href={project.preview} target="_blank" rel="noopener noreferrer" className="ml-4 hover:underline">
                                            <FaExternalLinkAlt className="inline-block mr-1" />
                                            Preview
                                        </a>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <p>No projects available at the moment.</p>
            )}
        </section>
      </div>
    </main>
  </>)
}

export default Projects