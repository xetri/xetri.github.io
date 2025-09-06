import { Switch, Route } from "wouter"
import { Home, Blogs, BlogDetails, NotFound } from "@/components"

export default function App() {

  return (
    <>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/blogs/:blogId" component={BlogDetails}/>
        <Route component={NotFound}/>
      </Switch>
    </>
  )
}

