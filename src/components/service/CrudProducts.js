import httpCommon from "@/http-common";
class CrudProducts {
    getAllProducts() {
        return httpCommon.get('Products/GetAllProducts')
    }
    createProduct(data) {
        return httpCommon.post('Products/InsertProducts', data)
    }
    updateProduct(id, data) {
        return httpCommon.put(`Products/UpdateProducts?id=${id}`, data)
    }
    deleteProduct(id){ 
        return httpCommon.delete(`Products/DeleteProduct?id=${id}`)
    }
}
export default new CrudProducts