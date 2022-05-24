import httpCommon from "@/http-common";
class CrudUsers {
    getAllUsers() {
        return httpCommon.get('Users/GetAllUsers');
    }
    insertUser(data) {
        return httpCommon.post("Users/InsertUser", data);
    }
    updateUser(id, data) {
        return httpCommon.put(`Users/UpdateUser?id=${id}`, data);
    }
    deleteUser(id) {
        return httpCommon.delete(`/Users/DeleteUser?id=${id}`);
    }
}
export default new CrudUsers();