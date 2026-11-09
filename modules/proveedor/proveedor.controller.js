import { ProveedorModel } from "./proveedor.model.js";
export const obtenerProveedores = async (req, res) => {
  try {
    const results = await ProveedorModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: `error al listar : ${error}`,
    });
  }
};
export const ObtenerProveedorPorId = async (req, res) => {
  try {
    const results = await ProveedorModel.findById(2);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: `error al encontrar proveedor: ${error}`,
    });
  }
};
export const crearProveedor = async (req, res) => {
  const datos = {
    nit: req.body.nit,
    razon_social: req.body.razon_social,
    contacto: req.body.contacto,
    email: req.body.email,
    telefono: req.body.telefono,
    ciudad: req.body.ciudad,
    estado: req.body.estado,
    fecha_creacion: req.body.fecha_creacion,
  };
  try {
    const results = await UserModel.create(datos);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error en la insercion:${error}`,
    });
  }
};
export const borrarProveedor = async (req, res) => {
  try {
    const results = await ProveedorModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error al eliminar:${error}`,
    });
  }
};
export const actualizarProveedor = async (req, res) => {
  try {
    const results = await ProveedorModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error al actualizar ${error}`,
    });
  }
};
