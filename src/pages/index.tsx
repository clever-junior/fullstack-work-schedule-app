import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const hello = trpc.generic.hello.useQuery({ text: 'Hello World!' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="text-3xl font-bold underline">
      <p>{hello.data.greeting}</p>
    </div>
  );
}
