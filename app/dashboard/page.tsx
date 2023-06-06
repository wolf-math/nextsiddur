import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <main>
      {/* @ts-ignore */}
      <h1>Hey {session.user.name}</h1>
    </main>
  );
}
