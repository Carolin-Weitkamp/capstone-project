// import styled from 'styled-components';

// // import useSWR from 'swr';
// // export { StyledInput };

// function Page({ data }) {
//   // Render data...
// }

// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     'https://api.websitecarbon.com/data?bytes=1000&green=1'
//   );
//   const data = await res.json();
//   console.log(data);

//   // Pass data to the page via props
//   return { props: { data } };
// }

// export default Page;

// const fetcher = (...args) => fetch(...args).then(res => res.json());

// export function Fetchdata() {
//   const { data, error } = useSWR(
//     'https://api.websitecarbon.com/data?bytes=1000&green=1',
//     fetcher
//   );
//   console.log(data);
//   return (
//     <>
//       <h1>….</h1>
//       {data ? <div> Data has arrived</div> : <div>loading</div>}
//     </>
//   );
// }

// export async function getServerSideProps(context) {
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }

// export function InputUrl ({
//     onSubmitUrl,
// }) {
//     function handleSubmit(event) {
//         event.preventDefault ();
//         onSubmitUrl();
//     }
//     return (
//      <StyledInput onSubmit={handleSubmit}>

//      </StyledInput>
//     )
// }

// https://api.websitecarbon.com/site?url

// const StyledInput = styled.form`
//   background: linear-gradient(
//     0deg,
//     rgba(2, 0, 36, 1) 0%,
//     rgba(0, 212, 255, 0) 0%,
//     rgba(158, 51, 198, 0.7581233176864496) 100%
//   );
//   width: 60vw;
//   height: 8vh;
//   margin-top: 1vh;
//   margin-bottom: 1vh;
//   font-size: 2.5vw;
//   border: 0.25vw solid white;
//   align-items: center;
//   color: white;
//   transition: 0.6s;
//   &:hover {
//     background-color: white;
//   }

//   &:hover {
//     color: purple;
//   }
// `;
