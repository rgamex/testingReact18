import Transition from "./components/transition";
import TransitionDos from "./components/transition2";
import UseDeffered from "./components/useDefferedTest";
import DefferedDos from "./components/useDefferedValue2";
import BatchingTimer from "./components/automaticBatchingTimer";
import BatchingAsync from "./components/automaticBatchingAsyncFunctions";
import BatchingEventListener from "./components/automaticBatchingEventListener";
import StrictComponent from "./components/strictMode";
import InsertionEffect from "./components/InsertionEffect";
import App from "./App";

export const routers = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/strictMode",
    element: <StrictComponent />,
  },
  {
    path: "/useInsertionEffect",
    element: <InsertionEffect />,
  },
  {
    path: "/batching/async",
    element: <BatchingAsync />,
  },
  {
    path: "/batching/timer",
    element: <BatchingTimer />,
  },
  {
    path: "/batching/eventListener",
    element: <BatchingEventListener />,
  },
  {
    path: "/transition",
    element: <Transition />,
  },
  {
    path: "/transition/2",
    element: <TransitionDos />,
  },
  {
    path: "/deffered",
    element: <UseDeffered />,
  },
  {
    path: "/deffered/2",
    element: <DefferedDos />,
  },
];
