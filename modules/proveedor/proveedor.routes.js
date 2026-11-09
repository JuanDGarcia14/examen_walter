import {Router} from "express";
import * as proveedorCtr from "./proveedor.controller.js";
const router = Router();
router.get("/proveedores", proveedorCtr.obtenerProveedores);
router.get("/proveedores/:id", proveedorCtr.ObtenerProveedorPorId);
router.post("/proveedores", proveedorCtr.crearProveedor);
router.delete("/proveedores/:id", proveedorCtr.borrarProveedor);
router.put("/proveedores/:id", proveedorCtr.actualizarProveedor);
export default router;