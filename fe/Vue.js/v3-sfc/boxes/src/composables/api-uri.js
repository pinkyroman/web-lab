
import { ref } from 'vue';
import * as services from '../config/services.json';

export function useApiUri(serviceName) {
    const service = services[serviceName];
    if (!service) {
        throw new Error(`Service '${serviceName}' not found.`);
    }    

    const { scheme, host, port } = service.apiRoot;
    return ref(`${scheme}://${host}:${port}/${service.apiName}${service.apiVersion.trim().length > 0 ? '/' + service.apiVersion : ''}`);
}