import {getUsersdb, registerdb,logindb} from '../../common/models/user.model.js'

export const getUsers =  async(req, res, next) => {
   
    try {
        const [data] = await getUsersdb()
      
        return res.json(data)
    } catch (error) {
        console.log("🚀 ~ file: user.service.js:10 ~ getUsers ~ error:", error)

        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const register = async (req, res)=> {
    try {
        const { name, password } = req.body;

        const data = await registerdb(name, password)
       
       return res.json(data);
    } catch (error) {
        console.log("🚀 ~ file: user.service.js:24 ~ register ~ error:", error)
        
        return res.status(500).json({ message: "Something goes wrong" });
    }
}
export const login = async (req, res, next)=> {
    try {
        const { name } = req.body;

        const data = await logindb(name)
       
       return res.json(data);
    } catch (error) {
        console.log("🚀 ~ file: user.service.js:24 ~ register ~ error:", error)
        
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const updateUsers = async (req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const deleteUsers = async (req, res, next) =>{
    try {
        
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
    
}




