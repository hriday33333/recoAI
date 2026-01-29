const ServiceDetailsPage = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <h2> Service Details Page : {slug}</h2>
    </div>
  );
};

export default ServiceDetailsPage;
