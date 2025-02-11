import {Request, Response} from "express";
import {User} from "../models/user";


interface Params{ //new
    id: string,
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, admin } = req.body;
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.admin = admin;
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

// export const updateUser = async (req: Request, res: Response, next: any) => {
//   try {
//     const { id } = req.params;
//     const { username, email, admin } = req.body;
//     const user = await User.findByPk(id);
//
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//
//     await user.update({ username, email, admin });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Error updating user" });
//   }
// };

export const updateUser = async (req: Request, res: Response) => {
  let id = req.params.id;
  let newUser = req.body;

  let userFound = await User.findByPk(id);

  if (userFound) {
    await User.update(newUser, {
      where: { id: id }
    });
    res.status(200).json();
  }
  else {
    res.status(400).json();
  }
}

export const deleteUser = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await User.destroy({
      where: {id: id}
    });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};
