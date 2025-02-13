export async function BackEnd(phoneNumber, message) {
  try {
    const response = await fetch("https://backendphonetocomputer.onrender.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, message }),
    });
    await response.json();
    console.log({ response });
  } catch (error) {
    console.log("Shoot......", error);
  }
}
