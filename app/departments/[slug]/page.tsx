import Header from "@/components/header"
import Footer from "@/components/footer"
import DepartmentDetail from "@/components/department-detail"

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DepartmentDetail slug={slug} />
      <Footer />
    </div>
  )
}
