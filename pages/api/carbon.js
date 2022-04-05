export default async function handler(request, response) {
  try {
    const url = request.query.url;

    const fetchResponse = await fetch(
      `https://api.websitecarbon.com/site?url=${encodeURIComponent(url)}`
    );
    const data = await fetchResponse.json();
    if (fetchResponse.ok && data.url) {
      response.status(200).json(data);
    } else {
      response.status(500);
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

// Query Parameter
