import httpCommon from "@/http-common";
class CrudService {
    getAll() {
        return httpCommon.get('Categories/GetAllCategories');
    }
    create(data) {
        return httpCommon.post("Categories/InsertCategory", data);
    }
    update(id, data) {
        return httpCommon.put(`Categories/UpdateCategory?id=${id}`, data);
    }
    delete(id) {
        return httpCommon.delete(`/Categories/DeleteCategory?id=${id}`);
    }
}
export default new CrudService();