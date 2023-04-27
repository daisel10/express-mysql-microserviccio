
export const getUsers=  async(req, res, next) => {
   
    try {
        const data = await new Promise((resolve, reject) => {})

        res.send('respond with a resource', data);
    } catch (error) {
        res.send('bad respond', error);
    }
}
export const register = async (req, res, next)=> {
    try {
        const data = await new Promise((resolve, reject) => {
        })

        res.send('respond with a resource', data);
    } catch (error) {
        res.send('bad respond', error);
    }
}
export const login = async (req, res, next)=> {
    try {
        const data = await new Promise((resolve, reject) => {
        })
        res.send('respond with a resource', data);
    } catch (error) {
        res.send('bad respond', error);
    }
}
export const updateUsers = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteUsers = async (req, res, next) =>{
    
}




