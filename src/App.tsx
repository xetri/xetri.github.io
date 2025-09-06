import { Switch, Route } from "wouter"
import { Home, Blogs, BlogDetails, NotFound, Header, Footer, Projects } from "@/components"
import styles from "@/styles/App.module.css"

export default function App() {

  return (
    <div className={`min-h-screen bg-background text-foreground`}>
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/blogs/:blogId" component={BlogDetails}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  )
}