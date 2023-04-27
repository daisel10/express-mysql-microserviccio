import {pool} from './mysql.js';

export async function getUsers(){
    try {
        return await pool.query("SELECT * FROM employee");
    } catch (error) {
        return error
    }
}

export async function register( name, password ){
    try {
        return await pool.query("INSERT INTO employee (name, password) VALUES (?, ?)",[name, password]);

    } catch (error) {
        return error
    }
}

export async function login(){
    try {
        
    } catch (error) {
        return error
    }

}
export async function updateUsers(name, password,id){
    try {
        
    const [result] = await pool.query(
        "UPDATE employee SET name = IFNULL(?, name), password = IFNULL(?, password) WHERE id = ?",
        [name, password, id]
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Employee not found" });
  
      const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
        id,
      ]);
  
      res.json(rows[0]);
        
    } catch (error) {
        return error
    }
}

export async function deleteUsers(){
    try {
        const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

        if (rows.affectedRows <= 0) {
            throw error;
        }

        return rows
        
    } catch (error) {
        return error
    }

}