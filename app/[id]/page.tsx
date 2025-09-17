import { getDynamicData, getStaticData } from "../../data";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <StaticData id={id}>
      <DynamicData id={id} />
    </StaticData>
  );
}

async function DynamicData({ id }: { id: string }) {
  const data = await getDynamicData(id);

  return (
    <div className="mt-8 border border-gray-300 rounded-lg p-6 shadow">
      <h2 className="text-xl font-semibold mb-2">Dynamic Content</h2>
      <p className="mb-2">
        The current ID is:{" "}
        <span className="font-mono font-bold text-blue-600">{id}</span>
      </p>
      <p>
        <span className="font-semibold">Fetched Data:</span>{" "}
        {data ? (
          <span className="text-green-700">{data.name}</span>
        ) : (
          <span className="text-gray-400">Loading...</span>
        )}
      </p>
    </div>
  );
}

async function StaticData({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  "use cache";
  const data = await getStaticData(id);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">
        Welcome to the Placeholder Page
      </h1>
      <p className="mb-6 text-gray-700">This is a static section of the UI.</p>
      <div className="mb-6 p-4 border border-gray-200 rounded">
        <h2 className="text-lg font-semibold mb-1">Static Data</h2>
        <div>
          <div>
            <span className="font-semibold">ID:</span> {data.id}
          </div>
          <div>
            <span className="font-semibold">Name:</span> {data.name}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
