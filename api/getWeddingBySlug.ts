const getWeddingBySlug = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/weddings/${slug}`
  );

  if (!response.ok) {
    throw new Error(
      `Error fetching wedding with id ${slug}: ${response.statusText}`
    );
  }
  const data = await response.json();

  return data;
};

export default getWeddingBySlug;
