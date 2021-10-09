import { Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// const IAST = lazy(() => import("@views/IAST/index"));
const Xmirror = lazy(() => import("@views/Xmirror/index"));
// const PTE = lazy(() => import("@views/PTE/index"));
// const OSS = lazy(() => import("@views/OSS/index"));
// const RASP = lazy(() => import("@views/RASP/index"));
// const Fuse = lazy(() => import("@views/Fuse/index"));

const routerConfig = (): JSX.Element => (
  <Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route
        path="/"
        render={() => <Redirect to="/xmirror" />}
        exact
        key="first"
      />
      <Route path="/xmirror" component={Xmirror} key="xmirror" />
      {/* <Route path="/iast" component={IAST} key="iast" /> */}
      {/* <Route path="/pte" component={PTE} key="pte" /> */}
      {/* <Route path="/oss" component={OSS} key="oss" /> */}
      {/* <Route path="/rasp" component={RASP} key="rasp" /> */}
      {/* <Route path="/fuse" component={Fuse} key="fuse" /> */}
    </Switch>
  </Suspense>
);

export default routerConfig;
