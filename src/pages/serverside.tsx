/* eslint-disable no-console */
const ServerSide = ({ data }) => {
  console.log("Teste 2");

  return <h1>{data}</h1>;
};

export async function getServerSideProps() {
  const data = "Giosepe";
  console.log("Teste 1");

  return {
    props: {
      data,
    },
  };
}

export default ServerSide;
