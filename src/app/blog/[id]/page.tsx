export default function Blog({ params }: any ) {
  return (
    <div>
      <h1>Blog</h1>
      {params.id}
    </div>
  );
}
