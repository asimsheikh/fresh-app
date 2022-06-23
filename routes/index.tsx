/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Counter from "../islands/Counter.tsx";
import GetBalance from "../islands/GetBalance.tsx"

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`font-bold my-6`}>Here we go in fresh</p>
	  <p>The goal is to write things</p>
	  <p>And deploy fast.</p>
      <Counter start={3} />
      <p>The Ethereum account balance widget</p>
      <GetBalance />
    </div>
  );
}
