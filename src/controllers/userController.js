import { response } from "../helpers/Response.js";

let data = [
    {
        _id: 1,
        name: "Michelle",
        lastname: "Mejía",
        age: 18,
        studies: [
            {
                name: "Técnica en programación",
                university: "UPB"
            },
            {
                name: "Dibujos digital para video juegos y cine",
                university: "Pascual Bravo, Academy By Polygonus"
            }
        ],
        favoriteLanguajes: ["C#","Python", "PHP", "macro VBA"]
    },
];

const userCtrl = {}

// lista de usuarios
userCtrl.getData = (req, reply) => {
    try {
        response(reply, 200, true, data, "Lista de usuarios");
    } catch (error) {
        response(reply, 500, false, "", error.message); 
    }
};

// usuarios por id
userCtrl.getDataByid = (req, reply) => {
    try {
        const { id } = req.params;

        const user = data.find((item) => item._id == id);

        if (!user) {
            return response(reply, 404, false, "", "Usuario no encontrado");
        }
        response(reply, 200, true, user, "test");
    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
};

// guardar usuario
userCtrl.saveData = (req, reply) => {
    try {
        const { _id, name, lastname, age } = req.body;
        data.push({ _id, name, lastname, age });
        response(reply, 201, true, { _id, name, lastname, age }, "Usuario creado");
    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
};

// actualizar usuario
userCtrl.actualizar = (req, reply) => {
    try {
        const { id } = req.params;
        // const { _id, name, lastname, age } = req.body;

        const newData = data.map((item) =>
            item._id == id ? { ...req.body, age: parseInt(req.body.age) } : item);

        data = newData;

        response(reply, 200, true, "", "Usuario actualizado");
    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
};

// eliminar usuario
userCtrl.eliminar = (req, reply) => {
    try {
        const { id } = req.params
        const newData = data.filter(item => item._id !== id)
        data = newData;
        response(reply, 200, true, id, "Usuario eliminado");

    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
};

export default userCtrl