import { Title } from "solid-start";
import Counter from "~/components/Counter";
import { createQuery } from "@tanstack/solid-query";

export default function Home() {
  const postsQuery = createQuery(() => ({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    refetchInterval: 2000,
  }));

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>

      <p>{JSON.stringify(postsQuery.data, null, 2)}</p>
    </main>
  );
}
