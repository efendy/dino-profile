import { GetStaticProps } from "next";

const MapsPage = () => {
  return (
    <div className="w-screen h-screen ">
      <iframe src="https://www.google.com/maps/d/embed?mid=1FdmzoErPrhYbvmFU5e5HhzVhJ0-QSFU&" className="w-full h-full fixed mt-20"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"></iframe>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const SID = "greenlakecity"
  
  return {
    props: {
      sid: SID
      
    },
  }
}

export default MapsPage
