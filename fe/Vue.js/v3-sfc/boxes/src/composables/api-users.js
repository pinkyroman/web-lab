import { ref, unref, watchEffect } from 'vue';
import { useApiUri } from './api-uri';

export function useUsersService() {
    const uri = useApiUri('users');
    const users = ref(null);
    const error = ref(null);

    function doSomething() {
        const url = unref(uri);
        console.log(`Fetching ${url} ...`);

        users.value = [{
            id: 1001,
            name: {
                first: 'John',
                middle: 'F.',
                last: 'Doe'
            }
        }];
        error.value = null;
    }

    watchEffect(doSomething);

    return {
        uri,
        users,
        error
    }
}