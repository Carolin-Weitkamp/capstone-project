export default async function handler(request, response) {
  try {
    const fetchResponse = await fetch(
      `https://admin.thegreenwebfoundation.org/data/directory/`
    );
    const data = JSON.parse(
      (await fetchResponse.text()).replace(/^callback\((.*)\);/, '$1')
    );
    if (fetchResponse.ok && data) {
      response.status(200).json(data);
    } else {
      response.status(500);
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

// try {
//   const url  = request.query.url;

//   const response = await fetch(
//     `https://admin.thegreenwebfoundation.org/data/directory/`
//   );
//   const newData = JSON.parse(await response.text()).replace();
//   // const data = JSON.parse(
//   //   (await response.text()).replace(/^callback\((.*)\);/, '$1')
//   // );
//   console.log(newData);
// } catch (error) {
//   response.status(500).json({ error: error.message });
// }
// }

//   if (fetch.ok && data) {
//     response.status(200).json(data);
//   } else {
//     response.status(500);
//   }
// } catch (error) {
//   response.status(500).json({ error: error.message });
// }

// const response = await fetch('bla')
// const data = JSON.parse((await response.text()).replace(/^callback\((.*)\);/, '$1'))
