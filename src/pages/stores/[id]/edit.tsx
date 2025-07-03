import { useRouter } from 'next/router';

export default function StoreEditPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Store Edit Page</h1>
      <p>Store ID: {id}</p>
    </div>
  );
}
