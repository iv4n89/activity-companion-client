import { Activity } from '@/types/activity';
import api from '../../api';

const baseUrl = '/activity';

const createActivity = async (activity: Activity) => {
    const response = await api.post(baseUrl, activity);
    return response.data;
}

const getAllActivities = async () => {
    const response = await api.get(baseUrl);
    return response.data;
}

const getOneActivity = async (id: number) => {
    const response = await api.get(baseUrl + '/' + id);
    return response.data;
}

const updateOneActivity = async (id: number, activity: Partial<Activity>) => {
    const response = await api.put(`${ baseUrl }/${ id }`, activity);
    return response.data;
}

const deleteOneActivity = async (id: number) => {
    const response = await api.delete(`${ baseUrl }/${ id }`);
    return response.data;
}