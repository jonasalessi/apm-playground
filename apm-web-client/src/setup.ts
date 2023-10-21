import { init as initApm } from '@elastic/apm-rum'

export default function setup() {
    initApm({
        serviceName: import.meta.env.VITE_APP_NAME,
        serverUrl: import.meta.env.VITE_APM_SERVER,
        serviceVersion: import.meta.env.VITE_APP_VERSION
    })
}