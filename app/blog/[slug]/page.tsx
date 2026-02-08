

export default async function Blog({ params }: { params: Promise<{ slug: string }> }){

     const {slug}= await params;

     // console.log(slug);

     return (
          <section className="container mx-auto p-3">
               <h2 className="text-3xl font-bold">{slug} blog</h2>
               <p>This is blog</p>
          </section>
     )
}