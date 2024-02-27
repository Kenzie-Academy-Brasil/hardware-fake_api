import "dotenv/config";
import app from "./app";

const PORT: Number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.`);
});
