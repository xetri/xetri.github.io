import { Link } from "wouter"
import { FaLinkedin, FaGithub, FaEnvelope, FaCalendar } from "react-icons/fa"
import config from "@/lib/config"

export function Header() {
  return (<>
    <header className="flex flex-col">
      <div className="border-b border-border p-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-muted-foreground">
          
          <div>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold">Avinash Pokhrel</h1>
              <p className="text-muted-foreground mt-2">Electrical Engineering Student</p>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-4">
            <a href={config.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href={config.profile.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
              <FaGithub />
            </a>
            <a href={`mailto:${config.profile.email}`} className="text-2xl hover:text-blue-600">
              <FaEnvelope />
            </a>
          </div>

        </div>
      </div>
    </header>

    <nav className="border-b border-border p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-6">
          <Link to="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link to="/projects" className="text-foreground hover:text-primary">
            Projects
          </Link>
          <Link to="/blogs" className="text-foreground hover:text-primary">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
    
  </>
  )
}

export default Header