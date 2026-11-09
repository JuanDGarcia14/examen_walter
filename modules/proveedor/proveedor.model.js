import db from "../config/dbconexion.js";

export const ProveedorModel = {
    findAll: async () => {
        const sql = "SELECT * FROM proveedores";
        const [rows] = await db.query(sql);
        return rows;
    },
    findById: async (id) => {
        const sql = "SELECT * FROM proveedores WHERE id_proveedor = ?";
        const [rows] = await db.query(sql, [id]);
        return rows;
    },
    delete: async (id) => {
        const sql = "DELETE FROM proveedores WHERE id_proveedor = ?";
        const [rows] = await db.query(sql, [id]);
        return rows;
    },
    update: async (id, data) => {
        const sql = "UPDATE proveedores SET ? WHERE id_proveedor = ?";
        const [rows] = await db.query(sql, [data, id]);
        return rows;
    },
    create: async (data) => {
        let nit = data.nit;
        let razon_social = data.razon_social;
        let contacto = data.contacto;
        let email = data.email;
        let telefono = data.telefono;
        let ciudad = data.ciudad;
        nit;
        razon_social;
        contacto;
        email;
        telefono;
        ciudad;
        const [nitexists] = await db.query(
            "SELECT * FROM proveedores WHERE nit = ?",
            [nit]
        );
        const [emailExists] = await db.query(
            "SELECT * FROM proveedores WHERE email = ?",
            [email]
        );
        if (nitexists.length > 0) {
            throw new Error("El NIT ya existe");
        }
        if (emailExists.length > 0) {
            throw new Error("El email ya existe");
        }
        if (razon_social.length == 0) {
            throw new Error("La razón social es obligatoria");
        }
        if (contacto.length == 0) {
            throw new Error("El contacto es obligatorio");
        }
        if (telefono.length < 7 || telefono.length > 10) {
            throw new Error("El teléfono debe tener entre 7 y 10 dígitos");
        }
        if (ciudad.length == 0) {
            throw new Error("La ciudad es obligatoria");
        }
        const sql = "INSERT INTO proveedores SET ?";
        const [rows] = await db.query(sql, [data]);
        return rows;
    }
}