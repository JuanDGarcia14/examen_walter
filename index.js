import express from "express";
import cors from "cors";
import rutaProveedor from "./modules/proveedor/proveedor.routes.js";

const app = express();
const PORT = 4100;
app.use(express.json());
app.use(cors());
app.use("/api", rutaProveedor);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto:${PORT}`);
});