import api from "@/api";

export class BaseFetcher<T> {
    constructor(private readonly baseUrl: string) { }

    public async create(object: T) {
        const response = await api.post(this.baseUrl, object);
        return response.data;
    }

    public async getAll() {
        const response = await api.get(this.baseUrl);
        return response.data.result;
    }

    public async getOne(id: number) {
        const response = await api.get(`${ this.baseUrl }/${ id }`);
        return response.data.result;
    }

    public async updateOne(id: number, object: Partial<T>) {
        const response = await api.put(`${ this.baseUrl }/${ id }`, object);
        return response.data;
    }

    public async deleteOne(id: number) {
        const response = await api.delete(`${ this.baseUrl }/${ id }`);
        return response.data;
    }
}