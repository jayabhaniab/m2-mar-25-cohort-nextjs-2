// src/components/JokeGenerator.jsx
async function getJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const joke = await res.json();
  return joke;
}

export default async function JokeGenerator() {
  const joke = await getJoke();

  return (
    <div className="p-4 border rounded shadow text-center">
      <h2 className="text-lg font-bold">Random Joke 😂</h2>
      <p className="mt-2">{joke.setup}</p>
      <p className="font-semibold">{joke.punchline}</p>
    </div>
  );
}
