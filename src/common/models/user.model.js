import {pool} from './mysql.js';

export async function getUsersdb(){
        return await pool.query("SELECT * FROM user");
    
}

export async function registerdb( name, password ){
        // INSERT INTO user (name, password) VALUES ('Ryan Ray', '123456789')
        return await pool.query(`INSERT INTO user (name, password) VALUES ('${name}', '${password}');`);
}

export async function logindb(name){
    try {

        return await pool.query(`SELECT * FROM user WHERE name= '${name}';`);
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