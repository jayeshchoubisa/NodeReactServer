import config from '../config/global';
import axios from 'axios';


class AuthService {
    LoginUser(user) {
        // console.log(config.apiAddress);
        return axios.post(config.apiAddress + '/auth/login', user)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    }
    SignUpUser(user) {
        console.log(user);
        return axios.post(config.apiAddress + '/auth/signup', user)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    }

    DeleteUsers(item)
    {
        return axios.post(config.apiAddress + '/auth/delete', item)
        .then(function (response) {
             console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });  
    }

    UpdateContacts(contacts)
    {
        return axios.post(config.apiAddress + '/auth/update',contacts)
        .then(function (response) {
             console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });

    }


    AddContacts(contacts)
    {
        return axios.post(config.apiAddress + '/auth/addcontact',contacts)
        .then(function (response) {
             console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    }

    GetContacts(id)
    {
        return axios.get(config.apiAddress + '/auth/getcontact/'+id)
        .then(function (response) {
             console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    }

    DeleteContacts(item)
    {
        return axios.post(config.apiAddress + '/auth/delete', item)
        .then(function (response) {
             console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });  
    }

    EditContacts(name)
   {
    return axios.get(config.apiAddress + '/auth/editcontact/'+name)
    .then(function (response) {
         console.log(response);
        return response;
    })
    .catch(function (error) {
        console.log(error);
        return error;
    });
   }


   Search(name,id)
   {
    return axios.get(config.apiAddress + '/auth/search/'+name+"/"+id)
    .then(function (response) {
         console.log(response);
        return response;
    })
    .catch(function (error) {
        console.log(error);
        return error;
    });
   }

    





    // SignUpUser(form,user) {
    //     // console.log(config.apiAddress+'/users');
    //     console.log(user);
    //     return axios.post(config.apiAddress + '/file',form)
    //         .then(function (response) {
    //             user.imagePath=response.data.filePath;
    //             return axios.post(config.apiAddress + '/auth/signup', user)
    //         .then(function (response) {
    //             return response;
    //         })
    //         .catch(function (error) {
    //             return error;
    //         });
                
    //         })
    //         .catch(function (error) {
    //             return error;
    //         });



        
    // }



}

const auth = new AuthService();
export default auth;