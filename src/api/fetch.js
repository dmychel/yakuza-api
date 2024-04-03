export async function callAPI(value) {
  const BASE_URL = "https://rest-api-jvtz.onrender.com";
  try {
    const res = await fetch(`${BASE_URL}/${value}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    alert(err);
  }
}
