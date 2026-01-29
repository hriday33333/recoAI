const ProjectsDetailPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Projects Detail Page : {slug}</h1>
    </div>
  );
};

export default ProjectsDetailPage;
