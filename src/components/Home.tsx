import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import * as meta from "@/lib/metadata"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export function Home() {

    return (<>        
      <main className="p-6">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* About me Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">About me</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                I am an electrical engineering student passionate about power systems, electronics, and renewable energy
                technologies. Currently pursuing my degree with a focus on sustainable energy solutions and smart grid
                technologies.
              </p>
            </div>
          </section>
          
          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            {meta.Experience.length > 0 && (
              <div className="space-y-6">
                {meta.Experience.map((exp, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{exp.role}</CardTitle>
                        <p className="text-muted-foreground">{exp.company} • {exp.duration}</p>
                        <p className="text-sm text-muted-foreground">{exp.location} • {exp.type}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{exp.description}</p>
                        <div className="text-sm">
                          <strong>Skills:</strong> {exp.skills.join(", ")}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )
            }
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            {meta.Education.length > 0 && (
              <div className="space-y-6">
                {meta.Education.map((edu, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{edu.degree}</CardTitle>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>)
}

export default Home
